/**
 * @file fruit-icons-list.ts
 * @module fruit-icons-list
 * @desc Maps fruit names to corresponding icon filenames for use in the Fruit Jar App UI.
 *
 * @features
 * - Defines the `FruitIconEntry` type (name + icon path)
 * - Exports `fruitIcons`, a list of available fruits with corresponding icon assets
 * - Used by UI components (e.g., `FruitJar`, `SelectedFruit`) for dynamic image rendering
 *
 * @author Chace Nielson
 * @created Jul 8, 2025
 * @updated Jul 8, 2025
 */

// Helper to get the icon path from public/icons/
export  const getFruitIconPath = (name: string): string | null => {
    const match = fruitIcons.find(f => f.name.toLowerCase() === name.toLowerCase())
    return match ? `/fruit-icons/${match.icon}` : null
  }


export interface FruitIconEntry {
  name: string
  icon: string
}

export const fruitIcons: FruitIconEntry[] = [
  { name: "Persimmon",          icon: "1-persimmon.png" },
  { name: "Strawberry",         icon: "2-strawberry.png" },
  { name: "Banana",             icon: "3-banana.png" },
  { name: "Tomato",             icon: "4-tomato.png" },
  { name: "Pear",               icon: "5-pear.png" },
  { name: "Durian",             icon: "6-durian.png" },
  { name: "Blackberry",         icon: "7-blackberry.png" },
  { name: "Lingonberry",        icon: "8-lingonberry.png" },
  { name: "Kiwi",               icon: "9-kiwi.png" },
  { name: "Lychee",             icon: "10-lychee.png" },
  { name: "Pineapple",          icon: "11-pineapple.png" },
  { name: "Fig",                icon: "12-fig.png" },
  { name: "Gooseberry",         icon: "13-gooseberry.png" },
  { name: "Passionfruit",       icon: "14-passionfruit.png" },
  { name: "Plum",               icon: "15-plum.png" },
  { name: "Orange",             icon: "16-orange.png" },
  { name: "GreenApple",         icon: "17-greenapple.png" },
  { name: "Raspberry",          icon: "18-raspberry.png" },
  { name: "Watermelon",         icon: "19-watermelon.png" },
  { name: "Lemon",              icon: "20-lemon.png" },
  { name: "Mango",              icon: "21-mango.png" },
  { name: "Blueberry",          icon: "22-blueberry.png" },
  { name: "Apple",              icon: "23-apple.png" },
  { name: "Guava",              icon: "24-guava.png" },
  { name: "Apricot",            icon: "25-apricot.png" },
  { name: "Melon",              icon: "26-melon.png" },
  { name: "Tangerine",          icon: "27-tangerine.png" },
  { name: "Pitahaya",           icon: "28-pitahaya.png" },
  { name: "Lime",               icon: "29-lime.png" },
  { name: "Pomegranate",        icon: "30-pomegranate.png" },
  { name: "Dragonfruit",        icon: "31-dragonfruit.png" },
  { name: "Grape",              icon: "32-grape.png" },
  { name: "Morus",              icon: "33-morus.png" },
  { name: "Feijoa",             icon: "34-feijoa.png" },
  { name: "Avocado",            icon: "35-avocado.png" },
  { name: "Kiwifruit",          icon: "36-kiwifruit.png" },
  { name: "Cranberry",          icon: "37-cranberry.png" },
  { name: "Cherry",             icon: "38-cherry.png" },
  { name: "Peach",              icon: "39-peach.png" },
  { name: "Jackfruit",          icon: "40-jackfruit.png" },
  { name: "Horned Melon",       icon: "41-horned-melon.png" },
  { name: "Hazelnut",           icon: "42-hazelnut.png" },
  { name: "Pomelo",             icon: "43-pomelo.png" },
  { name: "Mangosteen",         icon: "44-mangosteen.png" },
  { name: "Pumpkin",            icon: "45-pumpkin.png" },
  { name: "Japanese Persimmon", icon: "46-japanese-persimmon.png" },
  { name: "Papaya",             icon: "47-papaya.png" },
  { name: "Annona",             icon: "48-annona.png" },
  { name: "Ceylon Gooseberry",  icon: "49-ceylon-gooseberry.png" },
]
