import {NextRequest} from 'next/server'


export async function GET(request:NextRequest){
return NextRequest.json({
    name:"mmata",
    age:21
})
}