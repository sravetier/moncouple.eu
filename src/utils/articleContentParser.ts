import { ArticleContent, Section } from '../types/article';

export function extractContent(content: string, tag: string): string {
  const regex = new RegExp(`<${tag}>(.*?)<\/${tag}>`, 's');
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

export function extractSections(content: string): { sections: Section[], plainContent: string } {
  const sections: Section[] = [];
  let plainContent = content;
  
  // Extract sections with titles
  const sectionRegex = /<(section-title|point-title)>(.*?)<\/\1>(.*?)(?=<(section-title|point-title)>|$)/gs;
  let match;
  
  while ((match = sectionRegex.exec(content)) !== null) {
    const title = match[2].trim();
    const sectionContent = match[3].trim()
      .replace(/<quote>.*?<\/quote>/gs, '')
      .replace(/<\/?[^>]+(>|$)/g, '')
      .trim();
    
    if (title && sectionContent) {
      sections.push({ title, content: sectionContent });
    }
    
    plainContent = plainContent.replace(match[0], '');
  }
  
  // Clean up remaining tags from plain content
  plainContent = plainContent
    .replace(/<quote>.*?<\/quote>/gs, '')
    .replace(/<\/?[^>]+(>|$)/g, '')
    .trim();
  
  return { sections, plainContent };
}

export function parseArticleContent(content: string): ArticleContent {
  const intro = extractContent(content, 'intro')
    .replace(/<\/?[^>]+(>|$)/g, '')
    .trim();
  
  const keyPointsContent = extractContent(content, 'key-points');
  const keyPoints = extractSections(keyPointsContent);
  const quote = extractContent(keyPointsContent, 'quote')
    .replace(/<\/?[^>]+(>|$)/g, '')
    .trim();
  
  const imageSection = extractSections(extractContent(content, 'image-section'));
  const mainContent = extractSections(extractContent(content, 'main-content'));
  const conclusion = extractSections(extractContent(content, 'conclusion'));
  
  return {
    intro,
    keyPoints,
    quote,
    imageSection,
    mainContent,
    conclusion
  };
}