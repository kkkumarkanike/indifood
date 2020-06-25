import React from 'react'
import "./Maps.css"

function Maps() {
    return (
       <div className="map_iframe">
            <iframe
        
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30716.00432859132!2d77.4928063!3d15.777539599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1592967515040!5m2!1sen!2sin'
        width='100%'
        frameborder='0'
        style={{ border: '4px' }}
        allowfullscreen=''
        aria-hidden='false'
        tabindex='0'
      ></iframe>
       </div>
    )
}

export default Maps
