import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Opening from "./components/Opening";
import Hero from "./components/Hero";
import WeddingDetails from "./components/WeddingDetails";
import Countdown from "./components/Countdown";
import WeddingTimeline from "./components/WeddingTimeline";
import Moments from "./components/Moments";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import FloatingPetals from "./components/FloatingPetals";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF8F2]">
      {/* =========================================
          OPENING INVITATION
      ========================================== */}

      <AnimatePresence mode="wait">
        {!invitationOpened && (
          <Opening key="opening" onOpen={() => setInvitationOpened(true)} />
        )}
      </AnimatePresence>

      {/* =========================================
          MAIN WEDDING WEBSITE
      ========================================== */}

      {invitationOpened && (
        <>
          <FloatingPetals />
          {/* Background Music */}
          <MusicPlayer isPlaying={invitationOpened} />
          <main>
            <Hero />
            <WeddingDetails />
            <Countdown />
            <WeddingTimeline />
            <Moments />
            <Venue />
            <RSVP />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
