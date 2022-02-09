import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./styles/Welcome.css";

export default function Welcome() {
  const [firstcomplete, setFirstcomplete] = useState(false);

  const handleDone = () => {
    setFirstcomplete(true);
  };

  return (
    <div className="Welcome">
      <div className="welcometext">
        <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Hello, I'm Alex"]}
            cursor={!firstcomplete}
            cursorStyle="▋"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
          />
        </span>

        {firstcomplete && (
          <span>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["Full Stack Developer"]}
              cursor={true}
              cursorStyle="▋"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        )}
      </div>
    </div>
  );
}
