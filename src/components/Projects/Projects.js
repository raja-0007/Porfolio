import React from 'react'
import './projects.css'
import Card from '../cards/Card'
import emoji1 from '../images/emoji1.png'
function Projects() {
    return (
        <div className='row skills'>
            <div className='col-lg-6 skills-left'>
                <span>My Awesome</span>
                <span>skills</span>
                <span>
                    gfsiogho s;dorghoesr gh;sogh;sro h;oihro;s giosh ;gsrogyso8 a;sihfe a;oeifh; aoeyf <br></br>
                    slirhs;iru;osi; rosy ;sy8r ;s yr8 ; lkuggligu
                </span>

            </div>
            <div className='col-lg-6 p-right'>
                <div style={{ left: '14rem' }}>
                    <Card
                        emoji={emoji1}
                        heading={'Design'}
                        detail={'figma, sketch, photoshop, adove, adobe xd'}
                    />
                </div>

                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={emoji1}
                        heading={'Developer'}
                        detail={'Html, css, javascript, react, node'}
                    />
                </div>

                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={emoji1}
                        heading={'ui/ux'}
                        detail={'Html, css, javascript, react, node'}
                    />
                </div>




            </div>
        </div>
    )
}

export default Projects
