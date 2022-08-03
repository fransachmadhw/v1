import React from 'react'
// import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { BsEmojiSmile } from 'react-icons/bs'
import MapImage from '../public/assets/map.png'
import Image from 'next/image'

const Contact = () => {
//     const { isLoaded } = useJsApiLoader({
//         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     });

//     const center = {
//       lat: -7.934881,
//       lng: 112.578028
//     };

//     const options = {
//         mapId: "57d9e6fa8b9f0027"
//     };

//     const zoom = 5;

//     const [map, setMap] = React.useState(null)

//     const onLoad = React.useCallback(function callback(map) {
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);
//         setMap(map)
//     }, [])

//     const onUnmount = React.useCallback(function callback(map) {
//       setMap(null)
//     }, [])

//       const svgMarker = (<BsEmojiSmile />)

//   const image =
//     "https://img.icons8.com/ios-filled/50/FFFFFF/marker.png";


  return (
    <div className='w-full'>
        <div className='my-[110px] w-full'>
            <div className='w-full h-[400px] relative'>
                <Image
                    src={MapImage}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    placeholder='blur'
                />
                {/* {isLoaded ? (
                    <GoogleMap
                        zoom={6}
                        minZoom={3}
                        maxZoom={7}
                        options={options}
                        center={center}
                        mapContainerClassName='w-full h-full'
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        gestureHandling='cooperative'
                    >
                        <MarkerF
                            position={center}
                            icon={image}
                        />
                    </GoogleMap>
                ) : <div className='flex w-full h-full justify-center items-center'>Loading Maps...</div>} */}

            </div>
            <div className='my-[80px] px-[30px] lg:px-[10vw]'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <h2 className='font-normal text-center text-lg tracking-[6px] text-neutral-400'>
                            Get In Touch
                        </h2>
                        <a href='mailto:franswinata6@gmail.com'>
                            <div className='pre flex items-center gap-2 lg:gap-5 relative cursor-pointer'>
                                <h2 className='text-center text-5xl font-bold lg:text-[7vw] whitespace-nowrap leading-none w-[100%] text-neutral-900'>Say Hello!</h2>
                                <h2 className='text-center text-3xl font-bold lg:text-[5vw] whitespace-nowrap leading-none w-[100%] text-neutral-900'><BsEmojiSmile /></h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Contact)