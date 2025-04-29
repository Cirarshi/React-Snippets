import "./App.css";
import TextExpander from "./TextExpander.js";

function App() {
  return (
    <div className="App">
      <TextExpander>
        The sound of rain on a tin roof is one of life's great symphonies. It
        taps out a rhythm more soothing than any lullaby, whispering secrets of
        faraway clouds and the tireless sky. In a world of buzzing screens and
        scheduled chaos, it reminds us that nature has its own beat, timeless
        and patient. Sit by the window, a cup of chai in hand, and suddenly,
        everything else can wait.
      </TextExpander>
      <TextExpander
        collapsedNumWords={20}
        expandableButtonText="Read More"
        collapsedButtonText="Read Less"
        buttonColor="red"
      >
        Have you ever noticed how pigeons strut around like they own the place?
        No rent, no job, just vibes. They’re the original freeloaders, gliding
        through cities with a swagger that says, “I dare you to move me.” And
        honestly? Respect. If reincarnation’s on the table, I might just check
        the "urban pigeon" box. Free crumbs, rooftop views, and absolutely no
        deadlines? Sign me up.
      </TextExpander>
      <TextExpander expanded={false} className="box">
        In the age of digital dreams, there’s something magical about
        handwritten letters. Each curve of ink carries the pulse of a human
        hand, the warmth of a thought paused and poured onto paper. It’s
        nostalgia dipped in permanence, unlike the vanishing whispers of a text.
        Maybe we ought to write more—slow down, breathe, and let our words wear
        shoes of patience again.
      </TextExpander>
      <TextExpander expanded={true}>
        At the heart of every great kitchen, there’s a sizzling story being
        written in butter and spice. Whether it’s your grandmother’s Sunday
        curry or that midnight maggi masterpiece, food is the poetry we taste.
        Even the burnt bits have tales to tell—of distraction, improvisation, or
        just a little too much drama with the flame. In any case, every recipe
        is a time machine. One bite, and whoosh—back to a memory you didn’t know
        you missed.
      </TextExpander>
    </div>
  );
}

export default App;
