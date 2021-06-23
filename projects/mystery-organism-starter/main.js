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
        // let test = addBases[Math.floor(Math.random() * 4)];
        let count = 0
        console.log(`antes de mudar ${dna}`)
        do{
          let addBases = this.dna[Math.floor(Math.random() * 4)]
          console.log(addBases)
          switch(addBases){
            case "T":
              if(!randomDna.includes("T")){
                randomDna.push("T")
              }
              break
            case "G":
              if(!randomDna.includes("G")){
                randomDna.push("G")
              }
              break
            case "C":
              if(!randomDna.includes("C")){
                randomDna.push("C")
              }
              break
            case "A":
              if(!randomDna.includes("A")){
                randomDna.push("A")
              }if(randomDna[0] === "A"){
                randomDna.shift("A")
              }
              break
          }

      } while(randomDna.length < 4)
      console.log(randomDna)
      return randomDna
    },
    compareDNA(pAequor){
      console.log(pAequor)
    }
  }
}


const pAequor = pAequorFactory(1,['A','G','T','C'])
console.log(pAequor.dna)
pAequor.mutate()