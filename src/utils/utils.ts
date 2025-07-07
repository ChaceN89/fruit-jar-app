import { fruitIcons } from "./fruit-icons-list"



// Helper to get the icon path from public/icons/
export  const getFruitIconPath = (name: string): string | null => {
    const match = fruitIcons.find(f => f.name.toLowerCase() === name.toLowerCase())
    return match ? `/fruit-icons/${match.icon}` : null
  }
