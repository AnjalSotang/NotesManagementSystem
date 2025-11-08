import React from 'react'

const NoteCard = ({notes}) => {
  return (
    <div className="bg-gray-100 py-12 px-8 mt-10">

  {/* <!--Card --> */}
  <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all ">

    {/* <!-- Card Image Section  --> */}
    <div className="relative">
      {/* <!-- Image URL --> */}
      <div className="card-image h-72 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h2 className="text-3xl font-bold text-white leading-tight">Innovating Tomorrow</h2>
          <p className="text-lg text-white opacity-80">Shaping the future of technology with creativity.</p>
        </div>
      </div>
    </div>

    {/* <!-- Card Body Section --> */}
    <div className="p-6 bg-white space-y-4">
      <h3 className="text-2xl font-semibold text-gray-800">Design Beyond Imagination</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Our design philosophy revolves around simplicity and functionality. By blending creativity with cutting-edge
        technology, we bring ideas to life that leave a lasting impact. Explore the future of design with us.
      </p>

      {/* <!-- CTA Button --> */}
      <div className="flex justify-between items-center">
        <button className="bg-green-800 text-white py-2 px-6 rounded-full text-sm font-medium shadow-md hover:bg-green-900 hover:shadow-xl transition-all transform flex items-center">
          Learn More
        </button>
        <span className="text-sm text-gray-500">Last updated: 2 mins ago</span>
      </div>
    </div>
  </div>

</div>
  )
}

export default NoteCard
