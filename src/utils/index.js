const handleGraphicData = (arrayGeracoes, mes) => {

    if(arrayGeracoes == null) {

        return(null)
    
    } else {

        const arrayDataMes = arrayGeracoes.filter((value) => {
            if(value.mes == mes) {
                return true
            } else {
                return false
            }
    
        }).map((value) => {
            return parseInt(value.totalKw)

        });

        if(!arrayDataMes){

            return 0;
        
        } else{ 

            const totalMes = arrayDataMes.reduce((a, b) => a + b, 0)

            return totalMes;

        }

        
    }
    


}

export default handleGraphicData;