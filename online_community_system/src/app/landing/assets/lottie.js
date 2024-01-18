export default function Lottie()
{
    return(
        <>
         <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
         <div className="flex justify-end items-center ">
        <dotlottie-player
          className="w-[600px] h-[500px]"
          src="https://lottie.host/64a5b794-aa83-40d6-8f7c-b15316abd968/UzmH9hX05V.json"
          background="transparent"
          speed="1"
          style={{ width: '500px', height: '500px' }}
          loop
          autoplay
        ></dotlottie-player>
      </div>

</>

    )
}