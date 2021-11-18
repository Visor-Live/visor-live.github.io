import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import {
  Card,
  Text,
  TabBar,
  TabBarTab,
} from '@emperorjack/refinery-ui';
import Feature from './Feature';
import Link from './Link';
import Video from './Video';

const sections = [
  'Home',
  'Features',
  'Demo',
  'Installation',
  'Feedback',
];

const getSectionOffset = (section) => (
  document.getElementById(section.toLowerCase()).offsetTop
);

const App = () => {
  const [containerRef, setContainerRef] = useState();
  const [currentSection, setCurrentSection] = useState('Home');
  const tabJustClicked = useRef(false);

  const handleSetSection = useCallback((section) => {
    tabJustClicked.current = true;
    setCurrentSection(section);
    containerRef.scrollTop = getSectionOffset(section) - containerRef.offsetTop;
  }, [containerRef]);

  const handleScroll = useCallback(() => {
    let updatedSection = currentSection;

    if (tabJustClicked.current) {
      tabJustClicked.current = false;
      return;
    }

    sections.forEach((section) => {
      if (containerRef.scrollTop >= getSectionOffset(section) - containerRef.offsetTop) {
        updatedSection = section;
      }
    });

    setCurrentSection(updatedSection);
  }, [currentSection, containerRef]);

  useEffect(() => {
    if (!containerRef) return undefined;

    containerRef.addEventListener('scroll', handleScroll);

    return () => {
      containerRef.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, handleScroll]);

  return (
    <div className="app">
      <div className="app__nav">
        <TabBar selectedTab={currentSection} setSelectedTab={handleSetSection}>
          {sections.map((section) => (
            <TabBarTab key={section} text={section} />
          ))}
        </TabBar>
      </div>

      <div className="app__content" ref={(ref) => setContainerRef(ref)}>
        <Text size="h3" id="home">Visor</Text>

        <Card>
          <Text size="18">
            Visor is a live coding environment for real-time visual performance
            <br />
            Visor bridges the gap between creative coding and VJing by offering user interfaces to
            easily interact with live coded Processing sketches
            <br />
            Visor offers a simple API for mapping visuals to audio or MIDI controllers, all in the
            expressive Ruby programming language
          </Text>
        </Card>

        <div className="hero-image">
          <img src="images/visor.png" alt="Visor" />
        </div>

        <Text size="h4" id="features">Features</Text>

        <Card>
          <div className="features">
            <Feature
              title="Live Coding with Processing"
              description="Update your program in real-time without restarting the application."
              src="processing.png"
            />

            <Feature
              title="Ruby Language"
              description="Simple creative coding while making use of powerful language features such as enumerators and blocks."
              src="ruby.png"
            />

            <Feature
              title="State Interface"
              description="Interact with program parameters as they are automatically displayed in the interface."
              src="state.png"
            />

            <Feature
              title="Layers"
              description="Organise your code into rearrangeable layers and configure their properties to create new compositions."
              src="layers.png"
            />

            <Feature
              title="Audio Analysis"
              description="Inspect the audio frequency spectrum and access the audio data in the code to drive visuals."
              src="fft.png"
            />

            <Feature
              title="Tap Tempo"
              description="Tap to the tempo of the music and create visuals that animate on the beat."
              src="taptempo.png"
            />

            <Feature
              title="MIDI Support"
              description="Configure MIDI controllers to create mappings between controls and program parameters."
              src="midi.png"
            />

            <Feature
              title="Learn Hub"
              description="In-app documentation to help you get started or dive deeper."
              src="learn.png"
            />
          </div>
        </Card>

        <Text size="h4" id="demo">Demo</Text>

        <Card>
          <Video
            name="demo-video-1"
            src="https://www.youtube.com/embed/_K57O4xmAE8"
            caption="Live coding performance featuring collaboration with musician (Visor version 0.6.1)"
          />

          <Video
            name="demo-video-2"
            src="https://www.youtube.com/embed/-W_Q3pWYk0I"
            caption="VJing style performance recording"
          />

          <Video
            name="demo-video-3"
            src="https://www.youtube.com/embed/oqSGJKDKigs"
            caption="Live coding performance featuring collaboration with musician (Visor version 0.4.0)"
          />
        </Card>

        <Text size="h4" id="installation">Installation</Text>

        <Card>
          <Text size="16">
            Visor is currently in alpha and subject to change.
            Testing, feedback, and critique are welcomed.
            <br />
            <Link url="https://github.com/Visor-Live/visor-builds/releases">
              Click here
            </Link>
            {' '}
            to download the latest Mac, Windows and Linux builds.
          </Text>
        </Card>

        <Text size="h4" id="feedback">Feedback</Text>

        <Card>
          <Text size="16">
            To report bugs, submit feature requests, or give further feedback, please contact
            {' '}
            <Link url="mailto:live.visor@gmail.com">
              live.visor@gmail.com
            </Link>
            {' '}
            or create an issue on
            {' '}
            <Link url="https://github.com/Visor-Live/visor-builds/issues">
              GitHub
            </Link>
            .
          </Text>
        </Card>

        <Text variant="tertiary" className="copyright-notice">
          Copyright © {new Date().getFullYear()} Jack Purvis - All Rights Reserved
        </Text>
      </div>
    </div>
  );
};

export default App;
