
const TypeScript = () => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", textAlign: 'left' }}>
            <div>
                <h3 style={{ textAlign: 'center' }}>{'Variables'}</h3>
                <p>{'Initialiser une variable => '}<b>{"const myvar = 0"}</b></p>
                <p>{'Initialiser une variable => '}<b>{"let myvar = 0"}</b></p>
                <p>{'Initialiser une variable => '}<b>{"var myvar = 0"}</b></p>
                <p>{'Initialiser une methode => '}<b>{"const myFunc = ( agrs: type ) => { myCode }"}</b></p>
                <p>{'Initialiser une methode => '}<b>{"function myFunc( agrs: type ) { myCode }"}</b></p>
                <h4 style={{ textAlign: 'center' }}>{'Types'}</h4>
                <p>{'number => '}<b>{"const myVar = 0"}</b></p>
                <p>{'string => '}<b>{"const myVar = '0'"}</b></p>
                <p>{'boolean => '}<b>{"const myVar = true"}</b></p>
                <p>{'null => '}<b>{"const myVar = null"}</b></p>
                <p>{'undefined => '}<b>{"const myVar"}</b></p>
                <p>{'object => '}<b>{"const myVar = [0,1,3]"}</b></p>
                <p>{'object => '}<b>{"const myVar = { keyNumber: 0 , keyArr: [0,1,3] }"}</b></p>
                <p>{'function => '}<b>{"const myVar = ( n1:number, n2:number ) => { return n1+n2 }"}</b></p>
                <p>{'function => '}<b>{"class MyClass{}"}</b></p>
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>{'Operateurs'}</h3>
                <p>{'Condition => '}<b>{'if(myvar === 0){ mycode }'}</b></p>
                <p>{'Comparaison vraisemblance equal=> '}<b>{'myvar == 0'}</b></p>
                <p>{'Comparaison vraisemblance not equal=> '}<b>{'myvar != 0'}</b></p>
                <p>{'Comparaison Equal=> '}<b>{'myvar === 0'}</b></p>
                <p>{'Comparaison not Equal=> '}<b>{'myvar !== 0'}</b></p>
                <p>{'Operateur Logique OU => myvar == 0  '}<b>{'||'}</b>{' myvar === 2'}</p>
                <p>{'Operateur Logique ET => myvar > 0 '}<b>{'&&'}</b>{' myvar !== 10'}</p>
                <p>{'Operateur Destructurateur (...)=> '}</p>
                <p>{'const myObj = {a:1,b:true,c:"toto"}'}</p>
                <p>{'const myObj2 = {'}<b>{'...'}</b>{'myObj,d:[]} '}</p>
                <p style={{ paddingLeft: "5rem" }}>{'==>const myObj2 = {a:1,b:true,c:"toto",d:[]} '}</p>


            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>{'Boucles'}</h3>
                <p>{'while => '}<b>{'while(myvar < 0){ myvar++ }'}</b></p>
                <p>{'for => '}<b>{'for(let yolo = 1;yolo < 10;yolo++) { myCode }'}</b></p>
                <br />
                <br />
                <h3 style={{ textAlign: 'center' }}>{'Type Générique'}</h3>
                <p>{'const myFunc = <TObj, Tkey extends keyof TObj>(myObj: TObj, myKey: Tkey) => {'}</p>
                <p style={{ paddingLeft: "5rem" }}>{' return myObj[myKey];'}</p>
                <p>{'}'}</p>
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>{'Exemple Type'}</h3>
                <p>{'let myVar = 100;'}</p>
                <p>{'typeof myVar => '}<b>{'?'}</b></p>
                <p>{'const myVar = 0; '}</p>
                <p>{'typeof typeof myVar => '}<b>{'?'}</b></p>
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>{'Exemple comparaisons simples'}</h3>
                <p>{'0 === 0 => '}<b>{'?'}</b></p>
                <p>{'"{ 0:true }" === { 0:true } => '}<b>{'?'}</b></p>
                <p>{'myVar === myVar => '}<b>{'?'}</b></p>
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>{'Exemple comparaisons pièges'}</h3>
                <p>{'{} == 0 => '}<b>{'?'}</b></p>
                <p>{'{ 0:true } == 0 => '}<b>{'?'}</b></p>
                <p>{'[] == [] => '}<b>{'?'}</b></p>
                <p>{'[1,2] === [1,2] => '}<b>{'?'}</b></p>
            </div>
        </div >
    )
}

export default TypeScript;
