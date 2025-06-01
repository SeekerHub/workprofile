import React from 'react'

function AboutPage() {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-2">
          Hey, I am bhavesh 👋🏼.{" "}
          
        </h2>
        <br />
        <div className="text-xl mb-2 leading-10">
            <div>
            On earth 🌍, since 1999. I work in MNC and have multiple interests. Right now, I'm focused on building and maitaining website for Apple which is one of our client.
            </div>
            <br />
            <div>
I mostly work on the frontend part of an application. This means I have experince in optimization, design system and experimenting with new ideas. In the mean time I often work in backend as well with NodeJS and Golang. If I'm not working on a project, you might find me on a trek or probably reading business case studies.
<br />
            </div>
            <br />
            <div>
If you want to get in touch, I'm most responsive over <span className='text-blue-300'>email</span> and I am trying to be active on <span className='text-blue-300'>twitter</span> slowly as well.
            </div>
        </div>
    </div>
  )
}

export default AboutPage