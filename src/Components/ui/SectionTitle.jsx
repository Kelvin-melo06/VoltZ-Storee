

const SectionTitle = ({children}) => {
  return (
    <div 
    className="
    font-['Orbitron']
    text-[28px]
    md:text-4xl
    mb-12
    text-center
    text-[#F2F2F2]
    relative
    inline-block
    after:content-['']
    after:absolute
    after:left-1/2
    after:bottom-[-10px]
    after:h-[3px]
    after:w-[0px]
    after:-translate-x-1/2
    after:bg-gradient-to-r
    after:from-transparent
    after:via-[#00BFFF]
    after:to-transparent
    after:transition-all
    after:duration-300
    hover:after:w-[120px]
    fade-up
    ">
        {children}
    </div>
  )
}

export default SectionTitle