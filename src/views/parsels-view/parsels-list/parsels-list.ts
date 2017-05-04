// export class ParselsList {
//     constructor(
//         recepient: string,
//         receivedDate: string,
//         receivedFrom: string,
//         pickedUpDate: string,
//         pieces: [number, string],
//         status: string
//     ) { }
// }
// export class ParselsList {
//     constructor(parselBlock: Object) {
//         return parselBlock;
//     }
// }

export interface ParselsList {
    id: number,
    recepient: string,
    received: string,
    deliveredby: string,
    pickedup: string,
    pieces: [number, string],
    status: string
}
