import React from 'react';
import pic1 from '../../assets/images/cer1.jpeg'
import pic2 from '../../assets/images/cer2.jpeg'
import pic3 from '../../assets/images/cer3.jpeg'
import pic4 from '../../assets/images/cer4.jpeg'

const Awards = () => {
    return (
        <div>
            <div class="grid grid-cols-4 gap-4">
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
            </div>
        </div>
    );
};

export default Awards;