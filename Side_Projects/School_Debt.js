class Debt{
    constructor(title, interest, loanAmout){
        this.title = title;
        this.interest = interest;
        this.loanAmout = loanAmout;
    }
    addToAmount(num){
        this.loanAmout +=num
    }
}

function addToAll(num,debts){
    for(let debt of debts){
        debt.addToAmount(num)
        console.log(debt)
    }
}

let AA = new Debt("AA",3.76,2244.81);
let AB = new Debt("AB",3.76,2613.43);
let AE = new Debt("AE",5.5,2127.17);
let AF = new Debt("AF",5.5,1515.73);
let AG = new Debt("AG",6.53,5016.35);
let AH = new Debt("AH",6.53,3875.00);
let debts = [AA,AB,AE,AF,AG,AH];
// addToAll(73.95,debts)
let BA = new Debt("Lowes",2.67,470.92)
let BB = new Debt("Capitol 1",1.58,523)
let BC = new Debt("Capitol 1 Silver",1.4,625)
let BD = new Debt("Victoria Secret",2.92,912)
let BE = new Debt("FT",2.08,1055)
let BF = new Debt("Bank of America",1.67,1600)
let BG = new Debt("AL",2.33,2300)
let BH = new Debt("CC",2.67,2900)
let debts2 = [BA,BB,BC,BD,BE,BF,BG,BH]

let todayDate = new Date("2025-6-1");
let dueDate = new Date("2028-11-23");
let years = dueDate.getFullYear()-todayDate.getFullYear();
let months = 0;
if(todayDate.getMonth()>dueDate.getMonth()){
    years--;
    months = (dueDate.getMonth()+12-todayDate.getMonth())+years*12;
}else{
    months = dueDate.getMonth()-todayDate.getMonth()+years*12;
}
console.log(`${years} years and ${months-(years*12)} months remaining`)


let totalAmount = 0;
let paymentSchedule = [];
let debtAmounts = [];
let totalpayments =[];
// for(let debt of debts){
//     if(debtAmounts.length==1){
//         debt.loanAmout>debtAmounts[0].loanAmout?debtAmounts.unshift(debt):debtAmounts.push(debt);
//     }
//     if(debtAmounts.length==0){
//         debtAmounts.push(debt.loanAmout)
//     }
//     else{
//         debt.loanAmout>debtAmounts[0].loanAmout?
//         (debtAmounts.unshift(debt.loanAmout)):(debtAmounts.push(debt.loanAmout))
//     }
// }
for(let debt of debts){
    debtAmounts.push(debt);
}
totalAmount = debtAmounts.reduce(
    (accumulator,current)=>
        accumulator + current.loanAmout,totalAmount,
);
let initialBalance = totalAmount;
let payment = totalAmount/months;
while(totalAmount>=payment){
    let paymentDate = new Date(todayDate.getFullYear(),(todayDate.getMonth()+1),23);
    payment = 300//totalAmount/months;
    debtAmounts.sort((a,b)=>b.loanAmout-a.loanAmout);
    paymentDate.setMonth(todayDate.getMonth()+((paymentSchedule.length)));
    paymentSchedule.push(`${paymentDate.toLocaleDateString()}  ${debtAmounts[0].title}: Debt Balance Remaining: ${debtAmounts[0].loanAmout.toFixed(2)}, Payment: ${payment.toFixed(2)} Total Amount Remaining: ${(totalAmount-payment).toFixed(2)}`);
    if(debtAmounts[0].loanAmout-payment<=0){
        let remainder = payment;
        while(remainder>0&&debtAmounts.length>0){
            if(debtAmounts[0].loanAmout<remainder){
                remainder -= debtAmounts[0].loanAmout;
                debtAmounts.shift();
            }
            if(debtAmounts.length==0){
                break;
            }
            if(debtAmounts[0].loanAmout>remainder){
                debtAmounts[0].loanAmout -= remainder;
                remainder = 0;
            }
        }
        // for(let i = 0;remainder>0;i++){
        //     if(debtAmounts[i].loanAmout<remainder){
        //         remainder -= debtAmounts[i].loanAmout;
        //         debtAmounts.shift();
        //     }


            // debtAmounts[i].loanAmout<remainder?
            // (remainder -= debtAmounts[i].loanAmout,debtAmounts[i].loanAmout=0,console.log(`Removing ${debtAmounts[i].title}`),debtAmounts.shift()):
            // debtAmounts[i].loanAmout -= remainder,remainder = 0;
            // console.log(debtAmounts[i].loanAmout)
            // console.log(remainder)
        }
    debtAmounts[0].loanAmout -= payment;
    for(let debt of debtAmounts){
        if(debt.loanAmout<0){
            continue;
        }
        debt.loanAmout *= (((debt.interest/100)/12)+1);
    }
    totalAmount = debtAmounts.reduce(
        (accumulator,current)=>
            accumulator + current.loanAmout,0
    );
    totalpayments.push(payment);
    months--;
    // console.log(totalAmount.toFixed(2))
    if(payment > totalAmount){
        paymentDate.setMonth(paymentDate.getMonth()+1)
        paymentSchedule.push(`Last Payment on ${paymentDate.toLocaleDateString()}  ${debtAmounts[0].title}: Balance Remaining: ${totalAmount.toFixed(2)}`);
    }    
}
console.log(paymentSchedule)
console.log(paymentSchedule.length)
console.log(paymentSchedule[paymentSchedule.length-1])
let total = totalpayments.reduce((a,b)=>a+b);
console.log(`Average Payment: ${(total/paymentSchedule.length).toFixed(2)}`);
console.log(`Total Amount Paid: ${total.toFixed(2)}, \nwhich is $${(total-initialBalance).toFixed(2)} more than the initial amount`);