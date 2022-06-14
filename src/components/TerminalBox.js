import React from 'react'

const TerminalBox = () => {
    return (
        <div className='mt-12'>
            <div id='bar' className='text-center md:w-8/12 h-[25px] bg-[#DAD9D9] my-0 mx-auto float-none rounded-t-md'>

                <div className='w-[60px] flex justify-between pt-[5px] pl-2 pb-[4px]'>
                    <div id="red" className='bg-[#E35151] rounded-full w-[13px] h-[13px]'>
                    </div>
                    <div id="yellow" className='bg-[#F0BD70] rounded-full w-[13px] h-[13px]'>
                    </div>
                    <div id="green" className='bg-[#228200] rounded-full w-[13px] h-[13px]'>
                    </div>
                </div>

                <div id="screen" className='bg-[#343C45] h-[250px] pt-3 rounded-b-md grid grid-rows-5 grid-cols-4 md:grid-cols-5 gap-2 grid-flow-col items-center justify-items-center'>
                    <p className="col-span-2 text-xs text-left md:text-sm md:col-span-1">~/company:$</p>
                    <p className='font-bold text-[#339F78] text-xl md:text-3xl col-span-3 row-start-1 col-start-3 md:col-start-2 text-left'>MoneyMoves</p>

                    <p className="col-span-2 text-xs md:text-sm md:col-span-1">~/title:$</p>
                    <p className='col-span-3 col-start-3 row-start-2 text-lg font-bold md:text-xl md:col-start-2'>Co-founder & CTO</p>

                    <p className="col-span-2 text-xs md:text-sm md:col-span-1">~/date:$</p>
                    <p className='col-span-3 col-start-3 row-start-3 font-bold text-md md:text-lg md:col-start-2'>Feb 21' - Feb 22'</p>

                    {/* <div className='pl-3'>
                        <div className='flex items-center'>
                            
                            <h1 className='font-bold text-[#339F78] text-3xl ml-5'>MoneyMoves</h1>
                        </div>

                        <div className='flex items-center pt-2'>
                            <p className="text-sm text-left">~/title: $</p>
                            <h1 className='ml-16 text-xl font-medium'>Co-founder & CTO</h1>
                        </div>

                        <div className='flex items-center pt-2'>
                            <p className="text-sm text-left">~/date: $</p>
                            <h1 className='ml-[58px] text-sm'>February 2021 - February 2022</h1>
                        </div>

                        <div className='flex items-center'>
                            <p className="text-sm text-left">~/tasks: $</p>
                            <ul className='text-sm ml-[53px] text-left pt-2'>
                                <li> <span className='text-[#339F78]'>-</span> Work with customer-facing API</li>
                                <li> <span className='text-[#339F78]'>-</span> Did some widget things</li>
                            </ul>                            
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default TerminalBox