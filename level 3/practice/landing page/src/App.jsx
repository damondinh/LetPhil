import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import axios from 'axios'

function App() {
  // Styles
  const textTitle = "text-6xl font-bold text-center";
  const textSubtitle = "text-3xl text-center mt-3";
  const btnPrimary = "bg-blue-600 text-white px-6 rounded-full mt-3 hover:bg-blue-500 transition duration-100";
  const btnSecondary = "bg-transparent text-blue-600 border-1 border-solid px-6 py-3 rounded-full mt-3 ml-4 hover:text-white hover:border-blue-500 hover:bg-blue-500 transition duration-100";

  // NavBar Component props
  const navItems = [
    { icon: "nutrition" },
    { label: "Store" },
    { label: "Mac" },
    { label: "Ipad" },
    { label: "Iphone" },
    { label: "Watch" },
    { label: "Vision" },
    { label: "AirPods" },
    { label: "TV & Home" },
    { label: "Entertainment" },
    { label: "Accessories" },
    { label: "Support" },
    { icon: "search", label: "" },
    { icon: "shopping_bag", label: "" }
  ];

  // Hero Component props
  const iphoneHero = {
    bg: "/src/assets/hero_iphone_family__fuz5j2v5xx6y_largetall.jpg",
    title: { text: "iPhone", style: textTitle },
    subtitle: { text: "Meet the latest iPhone line-up.", style: textSubtitle },
    buttons: [
      { text: "Learn More", style: btnPrimary },
      { text: "Shop iPhone", style: btnSecondary }
    ]
  }

  const macbookHero = {
    bg: "/src/assets/hero_macbook_pro__b4hqnjg4iuly_largetall.jpg",
    title: { text: "MacBook Pro", style: "text-white " + textTitle },
    subtitle: { text: "Now with M5, M5 Pro and M5 Max.", style: "text-white " + textSubtitle },
    buttons: [
      { text: "Learn More", style: btnPrimary },
      { text: "Shop iPhone", style: btnSecondary }
    ]
  }

  const ipadHero = {
    bg: "/src/assets/hero_ipad_air_m4__ew8k92mk1w6e_largetall.jpg",
    title: { text: "iPad Air", style: textTitle },
    subtitle: { text: "Now supercharged by M4.", style: textSubtitle },
    buttons: [
      { text: "Learn More", style: btnPrimary },
      { text: "Shop iPhone", style: btnSecondary }
    ]
  }

  // Pokemon API Example
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
      setPokemon(data.results);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  }

  console.log(pokemon);

  return (
    <>
      <NavBar navItems={navItems}/>

      <Hero bg={iphoneHero.bg} title={iphoneHero.title} subtitle={iphoneHero.subtitle} buttons={iphoneHero.buttons}/>

      <Hero bg={macbookHero.bg} title={macbookHero.title} subtitle={macbookHero.subtitle} buttons={macbookHero.buttons}/>

      <Hero bg={ipadHero.bg} title={ipadHero.title} subtitle={ipadHero.subtitle} buttons={ipadHero.buttons}/>

      <button onClick={() => fetchPokemon()}>Get Pokemon</button>
      {pokemon && (
        <ul>
          {pokemon.map((poke, index) => (
            <li key={poke.name + index}>{poke.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
