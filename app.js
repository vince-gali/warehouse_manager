



const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
  },
  {
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
  },
  {
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
  },
  {
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
  },
  {
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
  }]

  let missingPackage = null



// function ()

 const options = ['weight', 'priority', 'fragile']
 const randomOptionIndex = Math.floor(Math.random() * options.weight && options.priority && options.fragile)
 const missingKey = options[randomOptionIndex]
// const result = options.filter(options.length > 5)
// console.log(result)


// switch(missingKey){
//     case 'weight' :
//         missingPackage.weight ? drawMissingPackage() : null
// }



function packageWeight(weight){
    console.log("filtering by weight", weight)
    let foundPackage = packages.filter(package => package.weight >= missingPackage.weight || package.weight <= missingPackage.weight)
    console.log(foundPackage)
   drawPackages(foundPackage)
}

function packagePriorityLevel(priorityLevel){
    console.log("filtering by priorityLevel", priorityLevel)
    let foundPackage = packages.filter(package => package.priorityLevel == missingPackage.priorityLevel)
    console.log(foundPackage)
    drawPackages(foundPackage)
}

function packageIsFragile(isFragile){
    console.log("filtering by fragile", isFragile)
    let foundPackage = packages.filter(package => package.isFragile == missingPackage.isFragile)
    console.log(foundPackage)
    drawPackages(foundPackage)
}


function selectRandomPackage(){
    const randomPackageIndex = Math.floor(Math.random() * packages.length)
    missingPackage = packages[randomPackageIndex]
    console.log('this is my random missing package' , missingPackage)
}

selectRandomPackage()

function drawPackages(missingPackage){
    let template  = ""
    missingPackage.forEach(p => template += `
    <div class="col-5 bg-dark text-light">
        <div> <h1>TO: ${p.to} </h1> </div>
        <div> <h1>ROUTE NUMBER ${p.trackingNumber} </h1> </div>
    </div>
    
    `)
    document.getElementById('packages').innerHTML = template
    
}


