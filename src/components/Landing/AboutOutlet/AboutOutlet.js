import Heading from '../Heading/Heading';

function AboutOutlet() {
  return(
    <div className='about-outlet' id="about-outlet">
      <Heading title='Draw With Outlet' />

      <div className="about__description">
        <p>
          A creative outlet for you to express yourself.
        </p>
        <p>
          Make sketches, logos, tattoos, or anything you can think of!
        </p>
        <p>
          Let your creativity flow to the cosmos by drawing freehand using all the colors in the galaxy.
        </p>
      </div>

      <div className="about__tutorial">
        <div className="about__tutorial__content">
          <p>
            Select a color and brush radius.
          </p>
          <p>
            Draw with a pen, create lines, and play with shapes on the canvas.
          </p>
          <p>
            Make art that's out of this world (or do whatever you wish).
          </p>
        </div>

        <div className="about__tutorial__video">
        </div>
      </div>
    </div>
  )
}

export default AboutOutlet;