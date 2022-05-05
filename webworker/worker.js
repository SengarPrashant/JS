self.addEventListener('message',(e)=>{
    console.log(e.data)
    if(e.data=='longRunnigTask'){
        var count=0;
        for (let index = 0; index < 3900000000; index++) {
            count +=index;
        }
        self.postMessage({message:count})
    }
    
})