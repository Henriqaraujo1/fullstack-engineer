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
    mutate: function(){
        let randomDna = []
        do{
          let addBases = returnRandBase(this.dna.splice())
          randomDna.push(addBases)
        /*  If needs don't repeat the element inside the array, use this IF 
         * if(!randomDna.includes(addBases)){ 
         *    randomDna.push(addBases)*/
          if(randomDna[0] === "A"){
            randomDna.shift("A")
          }
      } while(randomDna.length < 15)
      console.log(randomDna)
      return randomDna
    },
    compareDNA(){
      let ex1 = pAequor1.dna
      let ex2 = pAequor2.dna
      let count = 0
      for(var i=0; i < ex2.length; i++){
        if(ex1[i] === ex2[i]){
          count++
        }
      }
      let common = ((100/ex2.length) * count).toFixed(2)
        console.log(`the specimen ${pAequor1.specimenNum} and specimen ${pAequor2.specimenNum} have ${common} DNA in common`)
    } ,
    willLikelySurvive() {
      let surviveDna = this.dna
      console.log(surviveDna)
      let count = 0
      for(var i=0; i < surviveDna.length; i++){
        
        if(surviveDna[i] === "C" || surviveDna[i] === "G") {
          count++
        }
        if(count >= 9){
          return true
        } else {
          return false
        }
      }
    }  
  }
}
let dbStudy = []
for(var i =0; i < 30; i++){
  let instances = pAequorFactory(i, mockUpStrand())
  if(instances.willLikelySurvive()){
    dbStudy.push(instances)
  }
}
// const pAequor1 = pAequorFactory(1,mockUpStrand())
// const pAequor2= pAequorFactory(2, mockUpStrand())
// console.log(`The Base of the pAequor1 ${pAequor1.mutate()}`)
// console.log(`The Base of the pAequor2 ${pAequor2.dna}`)
// pAequor2.compareDNA()
// pAequor1.willLikelySurvive()
