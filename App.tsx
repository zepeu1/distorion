import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Factions } from './components/Factions';
import { CharacterRoster } from './components/CharacterRoster';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Timeline />
      <Factions />
      <CharacterRoster />
    </Layout>
  );
};

export default App;