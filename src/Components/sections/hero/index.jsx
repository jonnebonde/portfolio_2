function heroSection() {
  return (
    <div
      className="flex flex-col w-full h-screen p-5 items-center"
      style={{ marginTop: "5%" }}
    >
      <h1
        className="font-bold font-heading text-center text-black overflow-visible"
        style={{
          fontSize: "clamp(73px, 12vw, 200px)",
          fontWeight: "bold",
        }}
      >
        Jonne
      </h1>

      <div className="w-full h-full flex justify-center ">
        {" "}
        <img
          src="/src/assets/profile-image.jpg"
          className="h-5/6 lg:h-full max-w-lg rounded-2xl w-full border-8 border-primary"
        />
      </div>

      <div className="w-full flex justify-space-between items-end sticky bottom-20">
        <div className="lg:w-1/3 w-auto bg-primary rounded-2xl ">
          <p className="font-bold font-heading text-xl text-black">
            Hi, my name is Jonne,
          </p>
          <p className="font-bold font-heading text-xl text-black">
            {" "}
            a freshly graduated frontend developer.
          </p>
          <button className="btn btn-primary border-black border-2 py-2 px-6 rounded-xl hover:bg-black hover:text-white">
            Contact Me
          </button>
        </div>

        <div className="md:w-1/2 w-auto "></div>
      </div>
    </div>
  );
}
export default heroSection;
