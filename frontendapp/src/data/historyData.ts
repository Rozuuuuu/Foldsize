export interface HistoryItem {
  id: number;
  name: string;
  icon: string;
  time: string;
  originalSize: string;
  compressedSize: string;
  percentage: string;
  group: 'Today' | 'Yesterday' | 'Older';
}

export const historyItems: HistoryItem[] = [
  {
    id: 1,
    name: 'hero-banner-v2_final_FINAL.jpg',
    icon: 'image',
    time: '14:23',
    originalSize: '4.2 MB',
    compressedSize: '840 KB',
    percentage: '-80%',
    group: 'Today',
  },
  {
    id: 2,
    name: 'Q3_Financial_Report_Draft.pdf',
    icon: 'picture_as_pdf',
    time: '09:15',
    originalSize: '12.8 MB',
    compressedSize: '3.1 MB',
    percentage: '-75%',
    group: 'Today',
  },
  {
    id: 3,
    name: 'product_showcase_v3.mp4',
    icon: 'video_file',
    time: '16:42',
    originalSize: '156.3 MB',
    compressedSize: '42.7 MB',
    percentage: '-73%',
    group: 'Yesterday',
  },
  {
    id: 4,
    name: 'team_photo_2024.png',
    icon: 'photo',
    time: '11:08',
    originalSize: '8.9 MB',
    compressedSize: '2.1 MB',
    percentage: '-76%',
    group: 'Yesterday',
  },
  {
    id: 5,
    name: 'presentation_deck_v2.pptx',
    icon: 'description',
    time: '10:30',
    originalSize: '24.5 MB',
    compressedSize: '5.8 MB',
    percentage: '-76%',
    group: 'Older',
  },
  {
    id: 6,
    name: 'brochure_design_final.ai',
    icon: 'design_services',
    time: '08:45',
    originalSize: '67.2 MB',
    compressedSize: '18.4 MB',
    percentage: '-73%',
    group: 'Older',
  },
];