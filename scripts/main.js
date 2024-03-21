// import React from 'react';
// import CircularSlider from '@fseehawer/react-circular-slider';

// const App = () => {
//     return (
//         <CircularSlider
//             label="happiness"
//             labelColor="#005a58"
//             knobColor="#005a58"
//             progressColorFrom="#004b90"
//             progressColorTo="#fffb96"
//             progressSize={24}
//             trackColor="#eeeeee"
//             trackSize={24}
//             hideLabelValue={true}
//             data={["1€","2€"]} //...
//             dataIndex={10}
//             onChange={ value => { console.log(value); } }
//         />
//     )
// };

// export default App;


function getTerm() {
    const hapInput = document.getElementById("happiness");
    const hapValue = "hap" + hapInput.value;
    const eneInput = document.getElementById("energy");
    const eneValue = "ene" + eneInput.value;
    db.collection("moodTerms").doc(hapValue).collection(eneValue).doc("DC3u3Gl95EGvRg8Dlno9").get()
        .then( doc => {
            moodterm = doc.data().term;
            document.getElementById("jsMoodterm").innerHTML = moodterm;
        } );
}
