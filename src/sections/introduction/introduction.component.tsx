import React, { FunctionComponent, useState } from 'react';
import './introduction.styles.scss';

const Introduction: FunctionComponent = () => {
  const [showAvoidCRA, setShowAvoidCRA] = useState(false);
  return (
    <section id="introduction" className="centering-container">
      <p>
        This guide presents how to create a react project without using the
        Create-React-App (CRA) tool, but by manually setting webpack 4 and
        babel.
      </p>
      <button className="btn" onClick={() => setShowAvoidCRA(!showAvoidCRA)}>
        Why avoiding CRA anyways?
      </button>
      <div className={`optional-info-container ${showAvoidCRA ? 'show' : ''}`}>
        <p>
          If you're wondering why the need to avoid CRA, let me start by saying
          that personally I don't find avoiding CRA a necessity, and for most
          personal projects the tool provides all you need.
        </p>
        <p>
          That being said, CRA does provide all you need, that means that it
          covers a huge range of different tools and settings, which you may
          actually not need or want.
        </p>
        <p>
          If you ever tried ejecting a project created with CRA you'll know
          exacly what I am talking about, the amount of settings and
          configurations provided is enormous and difficult to find your way
          through.
        </p>
        <p>
          What I am getting at is that CRA effectively creates a great amount of
          boilerplate and hides it away from you. This is usually fine, but as
          soon as you need to customize your setup you are forced to eject the
          project, that would create a large number of extra (and unncesessary)
          files of complex nature which you'll need to deal with and possibly
          maintain.
        </p>
        <p>
          So, avoiding CRA acutally gives you full control of you project and
          allows you full customizability over it. In this way you can get rid
          of all the "magic" that makes everything work and set the project
          specifically based on your needs.
        </p>
      </div>
      <p>
        The following are the steps I have personally used many times when
        creating new projects, I find them convenient and they work well, if you
        find something wrong that could be amended or something that could be
        improved please open an issue in the page's github repository
        (accessible from the link on the top-right corner of the page) and even
        consider contributing to the code if you feel like it.
      </p>
    </section>
  );
};

export default Introduction;
