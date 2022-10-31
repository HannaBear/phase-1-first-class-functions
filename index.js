function receivesAFunction(thing){
    return thing();
};

function returnsANamedFunction(){
    function add(){

    }
    return add;
};

function returnsAnAnonymousFunction(){
    return (function() {

})};


    
