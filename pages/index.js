
export default function Home() {
  return (<>
    <div className="flex justify-center gap-7 items-center h-screen w-screen bg-slate-100">
      <div className="video-wrapper">
        <video autoPlay muted loop playsInline preload="metadata" className="md:flex hidden">
          <source src={'https://webdraft.vercel.app' + '/Videos/coming_soon_web.mp4'} type="video/mp4" />
        </video>
        <video autoPlay muted loop playsInline preload="metadata" className="flex md:hidden">
          <source src={'https://webdraft.vercel.app' + '/Videos/coming_soon_mobile.mp4'} type="video/mp4" />
        </video>
      </div>


    </div>

  </>);
}
