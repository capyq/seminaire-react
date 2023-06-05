
const JavaScript = () => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", textAlign: 'left' }}>
            <div>
                <h3 style={{ textAlign: 'center' }}>{'Variables'}</h3>
                <ul>
                    <li>
                        <p>{'Initialiser une variable => '}<b>{"let myvar = 0"}</b></p>
                    </li>
                    <li>
                        <p>{'Initialiser une methode => '}<b>{"let myFunc = (agrs) => { myCode }"}</b></p>
                        <p>{'Initialiser une methode => '}<b>{"function myFunc(agrs){ myCode }"}</b></p>
                    </li>
                </ul>
            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>{'Operateurs'}</h3>
                <ul>
                    <li>
                        <p>{'Condition => '}<b>{'if(myvar == 0){ mycode }'}</b></p>
                    </li>
                    <li>
                        <p>{'Comparaison Equal=> '}<b>{'myvar == 0'}</b></p>
                        <p>{'Comparaison not Equal=> '}<b>{'myvar != 0'}</b></p>
                    </li>
                    <li>
                        <p>{'Operateur Logique OU => myvar == 0  '}<b>{'||'}</b>{' myvar == 2'}</p>
                        <p>{'Operateur Logique ET => myvar > 0 '}<b>{'&&'}</b>{' myvar != 10'}</p>
                    </li>
                    <li>
                        <p>{'Operateur Destructurateur (...)=> const myObj = {a:1,b:true,c:"toto"}; const myObj2 = {'}<b>{'...'}</b>{'myObj,d:[]} '}</p>
                    </li>
                </ul>

            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>{'Boucles'}</h3>
                <ul>
                    <li>
                        <p>{'while => '}<b>{'while(myvar < 0){ myvar++ }'}</b></p>
                    </li>
                    <li>
                        <p>{'for => '}<b>{'for(let yolo = 1;yolo < 10;yolo++) { myCode }'}</b></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default JavaScript;
