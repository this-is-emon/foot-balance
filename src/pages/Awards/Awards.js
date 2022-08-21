import React from 'react';
import pic1 from '../../assets/images/cer1.jpg'
import pic2 from '../../assets/images/cer2.jpg'
import pic3 from '../../assets/images/cer3.jpg'
import pic4 from '../../assets/images/cer4.jpeg'
import pic5 from '../../assets/images/cer5.jpg'
import pic6 from '../../assets/images/cer6.jpg'
import pic7 from '../../assets/images/cer7.jpg'
import pic8 from '../../assets/images/cer8.jpg'
import pic9 from '../../assets/images/cer9.jpg'
import pic10 from '../../assets/images/cer10.jpg'

const Awards = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <p className="mb-20 text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-400  border-b-4 max-w-lg mx-auto text-center font-bold border-gray-500 "
            >Awards and Recognition</p>
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <img src={pic1} alt='certificate1 pic' />
                </div>
                <div>
                    <img src={pic2} alt='certificate2 pic' />
                </div>
                <div>
                    <img src={pic3} alt='certificate3 pic' />
                </div>
                <div class="row-span-2">
                    <div class="row-span-2">
                        <img src={pic6} alt='certificate4 pic' />
                    </div>
                    <img src={pic4} alt='certificate4 pic' />
                </div>
                <div>
                    <img src={pic7} alt='certificate4 pic' />
                </div>
                <div class="row-span-2 gap-2">
                    <img src={pic5} alt='certificate4 pic' />
                    <img src={pic8} alt='certificate4 pic' />
                </div>
                <div className='pb-5'>
                    <img src={pic10} alt='certificate4 pic' />
                </div>
            </div>










            {/* <div class="grid grid-flow-col auto-cols-3">
                <div>
                    <img src={pic1} alt='certificate1 pic' />
                </div>
                <div>
                    <img src={pic2} alt='certificate2 pic' />
                </div>
                <div>
                    <img src={pic3} alt='certificate3 pic' />
                </div>
                <div>
                    <img src={pic4} alt='certificate4 pic' />
                </div>
                <div>
                    <img src={pic5} alt='certificate4 pic' />
                </div>
                <div>
                    <img src={pic6} alt='certificate4 pic' />
                </div>
                <div>
                    <img src={pic7} alt='certificate4 pic' />
                </div>
            </div> */}
        </div>
    );
};

export default Awards;