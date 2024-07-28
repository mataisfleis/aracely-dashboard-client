function Root() {
  return (
    <>
      <section className="pt-10 max-w-80 md:max-w-none md:mt-28 md:justify-around">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
          <div className="flex flex-col gap-5 max-w-screen-md">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl">El bot que necesitas en tu servidor</h1>
              <p className="text-neutral-400 text-md md:text-lg">
                Moderación, juegos, utilidades y mucho mas.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-full md:flex-row md:items-center md:justify-center">
              <a
                className="bg-orchid-600 transition-all min-w text-black font-bold h-11 py-2 rounded-lg px-8 w-full text-center hover:bg-orchid-400 md:w-auto md:text-justify"
                href="/invite"
              >
                Invitar al bot
              </a>
              <a
                className="bg-transparent border-white border-2 transition-all min-w  font-bold h-11 py-2 rounded-lg px-8 w-full text-center hover:bg-white hover:text-black md:w-auto md:text-justify"
                href="/invite"
              >
                Invitar al bot
              </a>
            </div>
          </div>
          <div>
            <img
              className="rounded-full w-52 md:w-96"
              src="/img/aracely.jpg"
              alt="Aracely logo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Root;
