// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (number,args) => {
  return {
    specimenNum: number,
    dna: args,
    mutate: function(dna){
        let randomDna = []
        for(var i=0; i < 4; i++){
          randomDna[i] = returnRandBase().slice()
          switch(randomDna[i]){
            case "A":
              // if(randomDna
              break;
            default:
              console.log('A não foi o primeiro')
              /*We have progress to create the base, but can't 
              put the rule of letter A in other position*/
          }
        }
        console.log(randomDna)
        // switch(randomDna){
        //   case 'A':
        //     dna =  [0,randomDna]
        //     break;
        //   case 'T':
        //     break;
        //   case 'C':
        //     break;
        //   case 'G': 
        //     break;
        //   default:
        //     console.log('Don\'t found the DNA')  
        // }
      }
    }
  }


const pAequor = pAequorFactory(2)
pAequor.mutate()