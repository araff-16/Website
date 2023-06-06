import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./styles/Welcome.scss";

//...

export default function Welcome() {
  const [firstcomplete, setFirstcomplete] = useState(false);

  const handleDone = () => {
    setFirstcomplete(true);
  };

  return (
    <div className="welcome">
      <div className="welcometext">
        <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Hello, My Name is Alex Raffa"]}
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

//after welcome we auto scroll down to the about page
