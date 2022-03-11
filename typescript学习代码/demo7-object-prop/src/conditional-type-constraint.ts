//条件类型约束
type MessageOf<T> = T extends {message:unknown}? T["message"]:never //较好

//type MessageOf<T extends {message:unknown}> =T["message"]

interface Email{
    message:string
}

type EmailMessageContents=MessageOf<Email>
