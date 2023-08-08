


function createStore() {
    var storeContent = document.getElementById('store-content');
    
    var lor_card = document.getElementById(DB.VAR.lor_card);
    for(let rg in DB.REGIONS){
        let item = lor_card.cloneNode(true);
        item.innerHTML = item.innerHTML.replace(DB.VAR.cardName,DB.REGIONS[rg].regionName).replace(DB.VAR.cardAvatar,DB.ASSETS.items.capsules+ DB.REGIONS[rg].regionID+DB.KEYWORDS.png).replace(DB.VAR.cardPrice,'99$');
        item.id+=DB.REGIONS[rg].regionID;        
        storeContent.appendChild(item);
    }
}




const DB={
    ASSETS : {
        avatars:'assets/icons/',
        backgrounds:'assets/backgrounds/',
        fonts:'assets/fonts/',
        icons:{
            formats:'assets/icons/formats/',
            regions:'assets/icons/regions/',
            sets:'assets/icons/sets/',
        },
        items:{
            cardbacks:'assets/items/cardbacks/',
            chests:'assets/items/chests/',
            capsules:'assets/items/capsules/',
        }
        
    },
    
    
    REGIONS : {
        bandlecity : {
            regionID:'bandlecity',
            regionName:'Bandle City',    
        },
        bilgewater : {
            regionID:'bilgewater',
            regionName:'Bilgewater',    
        },
        
        demacia : {
            regionID:'demacia',
            regionName:'Demacia',   
        },
        freljord : {
            regionID:'freljord',
            regionName:'Freljord',      
        },
        ionia : {
            regionID:'ionia',
            regionName:'Ionia',     
        },
        noxus : {
            regionID:'noxus',
            regionName:'Noxus',     
        },
        piltoverzaun : {
            regionID:'piltoverzaun',
            regionName:'Piltoverzaun',      
        },
        runeterra : {
            regionID:'runeterra',
            regionName:'Runeterra',     
        },
        shadowisles : {
            regionID:'shadowisles',
            regionName:'Shadowisles',      
        },
        shurima : {
            regionID:'shurima',
            regionName:'Shurima',      
        },
        targon : {
            regionID:'targon',
            regionName:'Targon',      
        },
        
    },
    
    KEYWORDS : {
        bandlecity : "bandlecity",
        bilgewater : "bilgewater",
        demacia : "demacia",
        freljord : "freljord",
        ionia : "ionia",
        noxus : "noxus",
        piltoverzaun : "piltoverzaun",
        shadowisles : "shadowisles",
        shurima : "shurima",
        targon : "targon",
        png:'.png',
        jpg:'.jpg',
            
        
    },
    RANKS:{
        iron:'iron',
        bronze:'bronze',
        silver:'silver',
        gold:'gold',
        platinum:'platinum',
        diamond:'diamond',
        master:'mater',

    },
    VAR:{
        //ID-tag
        lor_card:'lor-card-',
        //param
        cardName:'lorCardName',
        cardPrice:'lorCardPrice',
        cardAvatar:'lorCardAvatar',
    }
}



createStore();