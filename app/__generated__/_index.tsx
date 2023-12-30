/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { type ReactNode, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset, ImageAsset, SiteMeta } from "@webstudio-is/sdk";
import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-remix";
import { Slot as Slot, Fragment as Fragment, Box as Box, Text as Text, Heading as Heading, Image as Image, Paragraph as Paragraph, Separator as Separator, Bold as Bold, Button as Button, HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const fontAssets: Asset[] = [{"id":"1e1bfb48-4b7b-4a0b-bd39-87f504ac9e95","name":"SpaceGrotesk_wght__2FXqrSM6Qb5IUNmO8wuzl.woff2","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":49256,"type":"font","createdAt":"2023-06-29T05:05:10.384Z","format":"woff2","meta":{"family":"Space Grotesk","variationAxes":{"wght":{"name":"Weight","min":300,"default":300,"max":700}}}}]
export const imageAssets: ImageAsset[] = [{"id":"60355699-b9ef-4c0c-8f28-73b15f7a5972","name":"Features_1.1_C4sg2-k5JE9lwGH1oFAxX.jpg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":521864,"type":"image","format":"jpeg","createdAt":"2023-08-08T06:52:24.158Z","meta":{"width":1920,"height":1080}},{"id":"b98b1840-6ce8-406b-87bc-124b8d110013","name":"Features_1.3_sCXJ-BElFe5G5qdreXLl2.jpg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":438504,"type":"image","format":"jpeg","createdAt":"2023-08-08T06:52:24.089Z","meta":{"width":1080,"height":1080}},{"id":"221efd0c-6cdb-4aae-9991-de8e398ffcb6","name":"Features_1.2_VgPZ6iAQigOpBf-Mn33W3.jpg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":618605,"type":"image","format":"jpeg","createdAt":"2023-08-08T06:52:24.044Z","meta":{"width":1080,"height":1080}},{"id":"ab55f657-6dca-43a9-9e5e-e8c44bcf1c8d","name":"Features_2.4_2wCq34wGy7mXEZheN65Ht.jpg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":272626,"type":"image","format":"jpeg","createdAt":"2023-08-04T00:15:01.092Z","meta":{"width":1080,"height":1080}},{"id":"40d19ca6-9520-4382-8a5d-eb1448ebed89","name":"Features_2.1_NIscvc7PVCAtEejnPT2I3.png","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":56703,"type":"image","format":"png","createdAt":"2023-07-28T05:41:38.887Z","meta":{"width":1080,"height":1080}},{"id":"5c9b83a3-b0b8-4774-a3f0-f1a2754bb70b","name":"Features_2.3_x8WxiEDSffKUEbdqQdEhA.png","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":166040,"type":"image","format":"png","createdAt":"2023-07-28T05:37:40.660Z","meta":{"width":1080,"height":1080}},{"id":"570689c3-6b4d-45c8-b39e-2d620a8b5b3d","name":"Features_2.2_iIeJXZR4vR2mQD4yPOIW1.png","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":184199,"type":"image","format":"png","createdAt":"2023-07-28T05:37:21.235Z","meta":{"width":1080,"height":1080}},{"id":"93021a48-af20-427b-a189-335e95fbd973","name":"Features_2.1_o27GLo-ZEDSqvwMxU5maT.png","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":64401,"type":"image","format":"png","createdAt":"2023-07-28T05:37:05.057Z","meta":{"width":1080,"height":1080}},{"id":"6cd2cc3e-05a9-4335-b8d5-c44e02752ef4","name":"andrew-power-y9L5-wmifaY-unsplash_dMh4R7uKXN1lnM5k2QTmt.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":363817,"type":"image","format":"jpeg","createdAt":"2023-07-28T00:01:38.654Z","meta":{"width":1920,"height":1920}},{"id":"b281a9b4-9df8-4325-a931-e59414c95ff6","name":"clay-elliot-mpDV4xaFP8c-unsplash_TxKpZ1DjGYzXIYNJ0iwW1.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":416475,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:54:28.790Z","meta":{"width":1920,"height":1920}},{"id":"d106fb5b-adcb-4f9e-ac2b-ca1a3a895f63","name":"leilani-angel-K84vnnzxmTQ-unsplash_hTwP6Ll8K4KCXsx4D9Ef0.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":199889,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:54:04.664Z","meta":{"width":1080,"height":1080}},{"id":"be5f4466-449a-424d-9c2a-8c9969ba1422","name":"linkedin-sales-solutions-QgYvORVDdd8-unsplash_Xm_WpENtQPgyvXKExi_tB.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":381521,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:53:45.665Z","meta":{"width":1920,"height":1920}},{"id":"e7a5b6f4-1a35-4213-bc7a-c6a1f031c16c","name":"annie-spratt-dWYU3i-mqEo-unsplash_Bxq7tG0vc6Bhsb97AZfEk.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":433712,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:46:12.750Z","meta":{"width":1920,"height":1281}},{"id":"cfcf5c90-400a-49a5-9805-79392785e5c9","name":"thai-an-E2Yd6K2A3fE-unsplash_Tg8ZBdBE4SGkh2_5hQ0tP.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":231981,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:45:31.070Z","meta":{"width":1920,"height":1920}},{"id":"96e625a7-e04d-4409-8915-618337112dcc","name":"joel-mott-VWGPhJyzMQ4-unsplash_-mcHxc58jA6kom3rcyacw.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":248005,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:43:37.368Z","meta":{"width":1920,"height":1920}},{"id":"50310230-ba74-4270-941a-b4c47b01dac3","name":"vicky-hladynets-C8Ta0gwPbQg-unsplash_JS3NJkGLTPL9D96tXRp8R.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":250306,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:43:11.295Z","meta":{"width":1080,"height":1080}},{"id":"b40f3847-bbee-4a1d-bf17-599cc25bee70","name":"christina-wocintechchat-com-SJvDxw0azqw-unsplash_2Vhjv5ot3JkLy18j5ONvm.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":514994,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:37:13.548Z","meta":{"width":1920,"height":1920}},{"id":"0d20baae-c818-4e27-b8db-2aba9bb9abc8","name":"bruce-mars-8YG31Xn4dSw-unsplash_KJktq3e6bvg4m93KCZgFG.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":258631,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:35:49.779Z","meta":{"width":1920,"height":1920}},{"id":"a5d7152a-d834-44c8-9d49-636465a12e93","name":"daria-pimkina-tYaccl19A3Q-unsplash_CxNvWGlbLj4PmQinO9rYg.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":255793,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:35:25.326Z","meta":{"width":1315,"height":1315}},{"id":"c0b45f62-5f15-4256-93fa-cf57e90179d7","name":"rachel-mcdermott-0fN7Fxv1eWA-unsplash_YSxowXdHZzaAV4_H9RO5I.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":169321,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:24:51.545Z","meta":{"width":1920,"height":1498}},{"id":"c2131080-1201-4824-af48-a9e4ee4cfed6","name":"ludovic-migneault-EZ4TYgXPNWk-unsplash_C5HgJG2-Yl2EIltDMzCpt.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":480646,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:23:34.882Z","meta":{"width":1280,"height":1920}},{"id":"53313698-3a84-41e2-b33d-ef50977e34b7","name":"saksham-gangwar-YVgOh8w1R4s-unsplash_iTt_4ilWzl7GK29jeO_y9.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":204662,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:11:52.132Z","meta":{"width":1080,"height":1234}},{"id":"3fcfb32c-61bf-4c3a-9815-276b92cf8b1d","name":"edward-cisneros-_H6wpor9mjs-unsplash_wSHJ4intTHufcvH563kj2.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":229318,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:10:53.843Z","meta":{"width":1080,"height":1080}},{"id":"6782c103-c037-4055-8939-c3c79222aa82","name":"jake-nackos-IF9TK5Uy-KI-unsplash_PGNJ6DB8F_VD49AWLsQcW.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":232394,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:10:28.055Z","meta":{"width":1526,"height":1920}},{"id":"89ff7c35-fcda-4ef1-a230-6270063654a0","name":"luis-villasmil-hh3ViD0r0Rc-unsplash_59b2CxQV6HODjB0t2loEF.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":166816,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:09:55.826Z","meta":{"width":1080,"height":1080}},{"id":"01042289-d848-4b0c-888d-c76714f563a5","name":"christina-wocintechchat-com-7JGjoSVfIDM-unsplash_2iRG6rykIJrYxZ5IjPWGj.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":272661,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:09:06.690Z","meta":{"width":1282,"height":1920}},{"id":"2b223d24-f02f-40cb-9aa6-6050749124ca","name":"foto-sushi-6anudmpILw4-unsplash_9L8RY7TY_Q1EPcvxO_oFX.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":170171,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:08:44.697Z","meta":{"width":1080,"height":1080}},{"id":"07a1a75d-dd0d-418d-bf16-f183363b5fd8","name":"sigmund-jzz_3jWMzHA-unsplash_b_VEz4vDDo56YTgGRuVhA.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":231064,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:08:03.041Z","meta":{"width":1080,"height":1080}},{"id":"ca3fb0f6-9035-403c-98f4-01164f90b15b","name":"ashton-bingham-EQFtEzJGERg-unsplash_n3B2v0oYFr8F3I9AcvNQP.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":482451,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:07:20.449Z","meta":{"width":1920,"height":1082}},{"id":"8e7b397d-ef04-4db0-bc77-ed04a0b0b54e","name":"Unlimited_k0pTiJKGKwn0-RBThmp8B.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":410,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.802Z","meta":{"width":24,"height":25}},{"id":"52504608-a171-45d5-a013-8a179b8fa059","name":"Star_Half_Full_gd_iVgLUHvt_V-1JmbFSP.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":958,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.304Z","meta":{"width":25,"height":25}},{"id":"d0fa29af-3a2d-4f24-b2b5-68a4aa11592f","name":"Star_Full_ImSm64EndSSy1xa20o-Q2.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":798,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.190Z","meta":{"width":26,"height":25}},{"id":"b78e8bfa-0186-43f1-92f5-090300837afe","name":"Check_ZuBsfCU5Bi_RHS54ItSG0.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":221,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.029Z","meta":{"width":26,"height":25}},{"id":"f82e1824-bb7d-4f55-a26d-1f25066673a7","name":"Twitter_Icon_White_E0esaSuquGdAthJcDsJlI.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":845,"type":"image","format":"svg","createdAt":"2023-06-30T22:56:44.856Z","meta":{"width":16,"height":13}},{"id":"e04b2f18-eff3-43d7-a8a5-e0fe61d8f3d3","name":"logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":16276,"type":"image","format":"svg","createdAt":"2023-03-24T21:43:47.942Z","meta":{"width":280,"height":211}}]
export const pageData: PageData = {"page":{"id":"9xR9hAVSFQsls07ekq14k","name":"Home","title":"Home","meta":{},"rootInstanceId":"yciogBG54zs9zd-BUDKkU","path":""}};
export const user: { email: string | null } | undefined = {"email":"fnoxb5691@gmx.com"};
export const projectId = "9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99";

const Page = () => {
let [sheetOpen, set$sheetOpen] = useState<any>(false)
let onOpenChange = (open: any) => {
sheetOpen = open
set$sheetOpen(sheetOpen)
}
return <Body
data-ws-id="yciogBG54zs9zd-BUDKkU"
data-ws-component="Body">
<Slot
data-ws-id="SiScM4cpvzPd6wia0aISy"
data-ws-component="Slot">
<Fragment
data-ws-id="hCrOEWk9TWQYyVMtCWD98"
data-ws-component="Fragment">
<Box
data-ws-id="TWSfZDEQ22jm6ORuD81bO"
data-ws-component="Box">
<Box
data-ws-id="91efxtQVNXMPQCM8RISLw"
data-ws-component="Box">
<Link
data-ws-id="FhAJxmce_FA6XmDDVIW3i"
data-ws-component="Link"
href={"/"}
target={"_self"}
prefetch={"intent"}>
{"SaaS Product"}
</Link>
<Box
data-ws-id="EQtO7ftc5pPiA3i2FtH_4"
data-ws-component="Box">
<Link
data-ws-id="qiJP4lRhBsQYrsjtQw1zm"
data-ws-component="Link"
href={"/about"}
target={"_self"}
prefetch={"intent"}>
{"About"}
</Link>
<Link
data-ws-id="Kg7CsP8B_x57o4M1loipu"
data-ws-component="Link"
href={"/pricing"}
target={"_self"}
prefetch={"intent"}>
{"Pricing"}
</Link>
</Box>
<Link
data-ws-id="gfC19v0WOUgUBofuzW7Ls"
data-ws-component="Link">
{"Try the App"}
</Link>
<Dialog
data-ws-id="cgHhI9Kh3-nHGI_D69LV3"
data-ws-component="@webstudio-is/sdk-components-react-radix:Dialog"
open={sheetOpen}
onOpenChange={onOpenChange}>
<DialogTrigger
data-ws-id="13XUUVUTbo8ogBwnc2-zT"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogTrigger">
<Button
data-ws-id="CpZHAp7GJUwle5AEC_STZ"
data-ws-component="Button">
<HtmlEmbed
data-ws-id="0emPLKUBAOQTyVrPfa1V5"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M2 5.998a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 5.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z\" clip-rule=\"evenodd\"/></svg>"} />
</Button>
</DialogTrigger>
<DialogOverlay
data-ws-id="Ee5LLqXY5bIaoNU-XdBgo"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogOverlay">
<DialogContent
data-ws-id="7mJmpqVW07KKydweeQWDB"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogContent">
<Link
data-ws-id="GYmubcqsrJQtUpVYAJlR9"
data-ws-component="Link"
href={"/about"}
target={"_self"}
prefetch={"intent"}>
{"About"}
</Link>
<Link
data-ws-id="FDeooXsbMGHKYgkIJbCyw"
data-ws-component="Link"
href={"/pricing"}
target={"_self"}
prefetch={"intent"}>
{"Pricing"}
</Link>
<Link
data-ws-id="e2XsIImkQ3eAKNN7vhISP"
data-ws-component="Link">
{"Try the App"}
</Link>
<Box
data-ws-id="4VgBDNAygLhwa4uli1-zy"
data-ws-component="Box"
tabIndex={0} />
<DialogClose
data-ws-id="Hrwk_WYZVCMvdwMHYUJqO"
data-ws-component="@webstudio-is/sdk-components-react-radix:DialogClose">
<HtmlEmbed
data-ws-id="Gxg26Cbkilf_rlZq5ULhz"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"M13.566 2.434a.8.8 0 0 1 0 1.132L9.13 8l4.435 4.434a.8.8 0 0 1-1.132 1.132L8 9.13l-4.434 4.435a.8.8 0 0 1-1.132-1.132L6.87 8 2.434 3.566a.8.8 0 0 1 1.132-1.132L8 6.87l4.434-4.435a.8.8 0 0 1 1.132 0Z\" clip-rule=\"evenodd\"/></svg>"} />
</DialogClose>
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
</Box>
</Fragment>
</Slot>
<Box
data-ws-id="KFt3pU_7bNjPUtVAM_PLs"
data-ws-component="Box">
<Box
data-ws-id="8PAZtVQKXTYOaVKPn6qdX"
data-ws-component="Box">
<Heading
data-ws-id="IT51c7FjAaBN9pfwTVIaE"
data-ws-component="Heading">
{"Unleash the Power of Human-Centered Project Management"}
</Heading>
<Text
data-ws-id="gB69_N0642JvOMPgWZCGp"
data-ws-component="Text">
{"Revolutionize Collaboration, Cultivate Results, and Embrace the Human Touch"}
</Text>
<Box
data-ws-id="z2H3DBkV5rCM3NPaXnQyv"
data-ws-component="Box">
<Link
data-ws-id="csy41CjHsFYwXBXVp3Nyv"
data-ws-component="Link">
{"Join our Discord"}
</Link>
<Link
data-ws-id="tR3vEoi_QLIU5p8z9kz10"
data-ws-component="Link">
{"Try the App"}
</Link>
</Box>
</Box>
<Box
data-ws-id="MuR6YNg0tASN8bjEROCUu"
data-ws-component="Box">
<Image
data-ws-id="4hnw7JxeTT89_ZkGPe2Am"
data-ws-component="Image"
src={"/assets/Features_1.1_C4sg2-k5JE9lwGH1oFAxX.jpg"} />
</Box>
<Box
data-ws-id="TXgdqKTZqfuMWhIPnAEYK"
data-ws-component="Box">
<Box
data-ws-id="JJQ6fvuNAHo96VzjHfmW2"
data-ws-component="Box">
<Heading
data-ws-id="o0Za1nGa2xP-2My4seoCY"
data-ws-component="Heading">
{"Seamlessly Blend Efficiency and Personal Connection"}
</Heading>
<Text
data-ws-id="IFV1xErotBG5OOUkTYcaY"
data-ws-component="Text">
{"Our innovative SaaS solution is designed to streamline communication and optimize team collaboration, all while preserving the personal touch that fuels creativity and fosters camaraderie."}
</Text>
</Box>
<Box
data-ws-id="Npoj--qYoiz2Vq_28lOE7"
data-ws-component="Box">
<Box
data-ws-id="cHz95BbUB--EFSf8dLV6n"
data-ws-component="Box">
<Image
data-ws-id="qdi_TKOpfhGFjhVqxGm3x"
data-ws-component="Image"
src={"/assets/Features_1.2_VgPZ6iAQigOpBf-Mn33W3.jpg"} />
</Box>
<Box
data-ws-id="fBvvkiTcc4H8QdZTxNWLx"
data-ws-component="Box">
<Heading
data-ws-id="qPqm_tZrFEYDAZv9xaOFb"
data-ws-component="Heading">
<Bold
data-ws-id="djoJZhznveMly5yeZKAfO"
data-ws-component="Bold">
{"Virtual Team Building Activities"}
</Bold>
</Heading>
<Text
data-ws-id="Mhlmn6y2YFcK5svHwuQ2-"
data-ws-component="Text">
{"Incorporate virtual team-building games and activities directly into the platform to foster camaraderie and strengthen relationships among team members, even if they are geographically dispersed."}
</Text>
<Link
data-ws-id="I7dO95CAhObO7pSN9_W0r"
data-ws-component="Link">
{"Try the App"}
</Link>
</Box>
</Box>
<Box
data-ws-id="tl2jLKlnMsOvtlRs7n3r7"
data-ws-component="Box">
<Box
data-ws-id="B_PnriDK_1PsJufLllMn6"
data-ws-component="Box">
<Image
data-ws-id="2ZiROeh8wjCu9KsC-B6gp"
data-ws-component="Image"
src={"/assets/Features_1.3_sCXJ-BElFe5G5qdreXLl2.jpg"} />
</Box>
<Box
data-ws-id="x0mrMHOZ90pOfPCCc5RQA"
data-ws-component="Box">
<Heading
data-ws-id="-nuiQYW0ug0ew-ppqTzHp"
data-ws-component="Heading">
<Bold
data-ws-id="mfjkvaBwr5XFzgGoMEXRo"
data-ws-component="Bold">
{"Empathy Dashboard"}
</Bold>
</Heading>
<Text
data-ws-id="hGPoAEOb95xNcCESH7pa8"
data-ws-component="Text">
{"Integrate an empathy dashboard that allows team members to express their emotions or well-being through emojis or short status updates, helping others understand their current state and offer support when needed."}
</Text>
<Link
data-ws-id="dVeYTizLX4FAFN5VtF9k1"
data-ws-component="Link">
{"Try the App"}
</Link>
</Box>
</Box>
</Box>
<Box
data-ws-id="1PnlhV97NrtGz7T87vPT3"
data-ws-component="Box">
<Box
data-ws-id="5hwKDN6W-9gU9GyYILKFh"
data-ws-component="Box">
<Heading
data-ws-id="M_Rv2zfIjIc-1M9kXU1Oq"
data-ws-component="Heading">
{"4 Power Features Everyone Needs to See"}
</Heading>
<Text
data-ws-id="oIggbSbOJkD2s1ldXspbe"
data-ws-component="Text">
{"These unique features can create a more inclusive, engaging, and productive environment for teams "}
</Text>
</Box>
<Box
data-ws-id="F91Nldn4Ue799PVlcLjjy"
data-ws-component="Box">
<Box
data-ws-id="HhvovkoTEnWxZuKRG1izP"
data-ws-component="Box">
<Box
data-ws-id="vbSAw-knb0qAF8VPpWjVK"
data-ws-component="Box">
<Box
data-ws-id="-HCB9trrAOYBcr6xED8Xn"
data-ws-component="Box">
<Image
data-ws-id="ubK4VatcLY0o-35bZ2dLl"
data-ws-component="Image"
src={"/assets/Features_2.1_NIscvc7PVCAtEejnPT2I3.png"} />
</Box>
<Heading
data-ws-id="4dgL2HD5RMihMMnKa4ehv"
data-ws-component="Heading">
<Bold
data-ws-id="wP1Kh6hgjsBxSTMVkFFm2"
data-ws-component="Bold">
{"Recognition and Kudos System"}
</Bold>
</Heading>
<Paragraph
data-ws-id="oFNjby5kD-1GsBEx-Zbsy"
data-ws-component="Paragraph">
{"Create a dedicated space within the platform for team members to publicly recognize and appreciate each other's efforts and achievements."}
</Paragraph>
</Box>
<Box
data-ws-id="W-QSYzsqKgTJdxixukaxz"
data-ws-component="Box">
<Box
data-ws-id="I6wzGycA5PrGgkoOBRT0V"
data-ws-component="Box">
<Image
data-ws-id="9KMNX72hdSqDMXgAuTcKK"
data-ws-component="Image"
src={"/assets/Features_2.2_iIeJXZR4vR2mQD4yPOIW1.png"} />
</Box>
<Heading
data-ws-id="_qNLLBuO13NuLSZg6p57m"
data-ws-component="Heading">
<Bold
data-ws-id="i9RVWEg3lKxy45pYGrh2S"
data-ws-component="Bold">
{"Personalized Avatars and Profiles"}
</Bold>
</Heading>
<Paragraph
data-ws-id="Wsf0j_EPoiYqYvjpq3J-x"
data-ws-component="Paragraph">
{"Allow users to create customizable avatars and profiles that showcase their personalities, helping team members connect on a more personal level beyond just work-related discussions"}
</Paragraph>
</Box>
</Box>
<Box
data-ws-id="Y0UdmF2hrH3AvxOJvs2Fz"
data-ws-component="Box">
<Box
data-ws-id="fJKYi0adVDK7Bt4u1gIZb"
data-ws-component="Box">
<Box
data-ws-id="xsYGB-Vfqn8tCGLniKFyz"
data-ws-component="Box">
<Image
data-ws-id="qzvuHrBuweB0wtIjIUeFg"
data-ws-component="Image"
src={"/assets/Features_2.3_x8WxiEDSffKUEbdqQdEhA.png"} />
</Box>
<Heading
data-ws-id="O1v7BgQDtByFm-ildmlqn"
data-ws-component="Heading">
<Bold
data-ws-id="mUFmHZ2dfx7ILPIg2IAqB"
data-ws-component="Bold">
{"Collaborative Ideation Spaces"}
</Bold>
</Heading>
<Paragraph
data-ws-id="Frw0SS-3Nc5QuJsCUiLzy"
data-ws-component="Paragraph">
{"Design virtual brainstorming and ideation spaces that facilitate real-time collaboration, enabling team members to visualize ideas, share feedback, and build upon each other's creativity"}
</Paragraph>
</Box>
<Box
data-ws-id="RaG82Qpejnuh_blNXDa4M"
data-ws-component="Box">
<Box
data-ws-id="7K6msjzpWj_7nyMZDX6Xp"
data-ws-component="Box">
<Image
data-ws-id="P4SxjJkX2R_idjUkZgfud"
data-ws-component="Image"
src={"/assets/Features_2.4_2wCq34wGy7mXEZheN65Ht.jpg"} />
</Box>
<Heading
data-ws-id="XpKJxG8mwCYPsLf5gL0zc"
data-ws-component="Heading">
<Bold
data-ws-id="SLF7GgDxOH_P2qWpuWNie"
data-ws-component="Bold">
{"Adaptive Task Prioritization"}
</Bold>
</Heading>
<Paragraph
data-ws-id="ha4xx8wHlYroaKCHjMyZk"
data-ws-component="Paragraph">
{"Utilize machine learning algorithms to analyze individual work patterns and automatically adapt task prioritization, ensuring each team member's workload aligns with their peak productivity times"}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="55LIleIGwKA_HjsEC3Itt"
data-ws-component="Box">
<Box
data-ws-id="dAzVmqUfB3Lm7aFZC4jLE"
data-ws-component="Box">
<Heading
data-ws-id="UPDaGsHQ5LAvAm7mA5rkP"
data-ws-component="Heading">
{"Impactful Experiences: Testimonials from Teams that Transformed with Us"}
</Heading>
<Text
data-ws-id="Z1jz2yXQOXPsUhJlGnwdT"
data-ws-component="Text">
{"From small startups to multinational enterprises, our solution has empowered teams to break down barriers, forge stronger bonds, and achieve remarkable results."}
</Text>
</Box>
<Box
data-ws-id="1GPWE2q-i6T70JXllYPM3"
data-ws-component="Box">
<Box
data-ws-id="4eIUfOFvif5Jd6TKXstIq"
data-ws-component="Box">
<Box
data-ws-id="177r1lN8hSPbPeeFA7yTS"
data-ws-component="Box">
<Box
data-ws-id="g9l5uK5JK4j-tZTBTTETR"
data-ws-component="Box">
<Box
data-ws-id="bwJ0uRpb8mM9uKyT9DOUg"
data-ws-component="Box">
<Heading
data-ws-id="DEPb5lkg6fuhEm0F5wBEA"
data-ws-component="Heading">
{"\"Our team's morale skyrocketed\""}
</Heading>
<Box
data-ws-id="anNihXulvkXHCGil3SOpJ"
data-ws-component="Box">
<Box
data-ws-id="KxQHv7rPurWcK9cXlX223"
data-ws-component="Box" />
<Box
data-ws-id="LCArjQeExlYSJrvrJec_-"
data-ws-component="Box" />
<Box
data-ws-id="R4opvdj1By_u04lCbB-0H"
data-ws-component="Box" />
<Box
data-ws-id="ofZ8Cww80EuTICgekhI4T"
data-ws-component="Box" />
<Box
data-ws-id="q3SwJr2N5Wq8sJmsx8Fnn"
data-ws-component="Box" />
</Box>
</Box>
<Paragraph
data-ws-id="VJlKbwMhJ35vHkplaD_sA"
data-ws-component="Paragraph">
{"The intuitive interface and innovative collaboration features helped us seamlessly connect, even across remote locations. But what truly stood out was the emphasis on empathy and recognition within the platform. We started using the Kudos system to celebrate each other's wins, and the positive energy it generated was remarkable. Our team's morale skyrocketed, and we achieved our project milestones faster than ever. "}
</Paragraph>
</Box>
<Box
data-ws-id="UL4fhMfwVjBc-cxcbxKw4"
data-ws-component="Box">
<Box
data-ws-id="u9k4M3yCJoeLQRfMGX-OZ"
data-ws-component="Box">
<Image
data-ws-id="ZzqR7cVDPQnBSJnI7t7Bv"
data-ws-component="Image"
src={"/assets/andrew-power-y9L5-wmifaY-unsplash_dMh4R7uKXN1lnM5k2QTmt.jpeg"} />
</Box>
<Box
data-ws-id="Uy9TgB7PWCWFl6iWR9K3-"
data-ws-component="Box">
<Text
data-ws-id="eYjqUkYtiMy49qo1WFbsU"
data-ws-component="Text">
{"John, Project Manager"}
</Text>
<Text
data-ws-id="oB09N5RnujuRTPjtyj0-9"
data-ws-component="Text">
{" XYZ Tech Solutions"}
</Text>
</Box>
</Box>
</Box>
<Box
data-ws-id="XegLW7ouMAtNxDe46MwRX"
data-ws-component="Box">
<Box
data-ws-id="WnL5_cp0irtOLmwOd0NVm"
data-ws-component="Box">
<Box
data-ws-id="Q9D9IeQEKGqCoCctLeUGn"
data-ws-component="Box">
<Heading
data-ws-id="Z5T2vAb-a8ceatEabbpZ0"
data-ws-component="Heading">
{"\"SaaS Product transformed the way our marketing team operates\""}
</Heading>
<Box
data-ws-id="ZJPilMxAVYEW3mMpFt33-"
data-ws-component="Box">
<Box
data-ws-id="NzpDfMZRPvH6AQhoeIozP"
data-ws-component="Box" />
<Box
data-ws-id="vdtGqzp5ti30k1fUzuDSk"
data-ws-component="Box" />
<Box
data-ws-id="8Uo24LB1ZFbGrBNGCdJ4t"
data-ws-component="Box" />
<Box
data-ws-id="8f1VCeDr6dMavnRHtYj0c"
data-ws-component="Box" />
<Box
data-ws-id="WAl1_nmWmpQdorwvAaQbz"
data-ws-component="Box" />
</Box>
</Box>
<Paragraph
data-ws-id="46wBFrNP0f_Nvn6OT6C4N"
data-ws-component="Paragraph">
{"The interactive progress celebrations injected so much fun into our projects, and it felt like a virtual party every time we hit a milestone. The empathy dashboard allowed us to express our emotions and well-being openly, fostering a supportive environment where we felt comfortable discussing our challenges."}
</Paragraph>
</Box>
<Box
data-ws-id="-xqMarHLSv1GeM1cwJM1k"
data-ws-component="Box">
<Box
data-ws-id="SvAlqWyeZmcHcnJKsC7sr"
data-ws-component="Box">
<Image
data-ws-id="x4XjpM9cMdlqfJ9lQSGVi"
data-ws-component="Image"
src={"/assets/clay-elliot-mpDV4xaFP8c-unsplash_TxKpZ1DjGYzXIYNJ0iwW1.jpeg"} />
</Box>
<Box
data-ws-id="jubY3EP8RWdaoWqiU-OyW"
data-ws-component="Box">
<Text
data-ws-id="lpz93qP5z7l6zneLjmTmF"
data-ws-component="Text">
{"Sarah, Marketing Specialist"}
</Text>
<Text
data-ws-id="oiUz-t9eze5zWn9nWbBKP"
data-ws-component="Text">
{"ABC Creative Agency"}
</Text>
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="393cnAjV62UkrqgU32Klf"
data-ws-component="Box">
<Box
data-ws-id="A8HfuREWtHmzqjHxsSKa5"
data-ws-component="Box">
<Box
data-ws-id="8f3Hldq0sdBRmgn1SfqH5"
data-ws-component="Box">
<Box
data-ws-id="r7yRTXT6tNolKn-fiHjGY"
data-ws-component="Box">
<Heading
data-ws-id="LrJ_3kjiXv8jQs0fNyS6y"
data-ws-component="Heading">
{"\"the secret sauce behind our recent successes\""}
</Heading>
<Box
data-ws-id="KCGNBZ5J9KQuN4tFJ3Hgl"
data-ws-component="Box">
<Box
data-ws-id="SVS3J7hZl6RxQhQjyI7KB"
data-ws-component="Box" />
<Box
data-ws-id="dSqQn_0DoiODHrSkJPJsm"
data-ws-component="Box" />
<Box
data-ws-id="d_zPJ25VsavdlJEvzqUeO"
data-ws-component="Box" />
<Box
data-ws-id="55rIo9Zic647ArJHldnu4"
data-ws-component="Box" />
<Box
data-ws-id="lPQ3eiRUPP9H_ooWE7kt4"
data-ws-component="Box" />
</Box>
</Box>
<Paragraph
data-ws-id="vOL0BeRQ-Hy_ptfL0frq8"
data-ws-component="Paragraph">
{"The virtual team-building activities and spontaneous coffee chats have brought us closer, despite being in different time zones. We've seen tremendous productivity gains since implementing this platform, but what impresses me most is the focus on maintaining a human touch. Our team feels more connected than ever, and I believe that's the secret sauce behind our recent successes."}
</Paragraph>
</Box>
<Box
data-ws-id="JFLcBNtQN86mBJ5ZfgxPz"
data-ws-component="Box">
<Box
data-ws-id="N-ZJ8d-8Nwn6y5hqZfJS-"
data-ws-component="Box">
<Image
data-ws-id="82xxrJt3aDqLnarWFWevo"
data-ws-component="Image"
src={"/assets/leilani-angel-K84vnnzxmTQ-unsplash_hTwP6Ll8K4KCXsx4D9Ef0.jpeg"} />
</Box>
<Box
data-ws-id="nTVAJUPTo5EBSlDU6BF0w"
data-ws-component="Box">
<Text
data-ws-id="eyrnl3jJ9HIPErQkcdmen"
data-ws-component="Text">
{"Michael, CEO"}
</Text>
<Text
data-ws-id="-C1TMlVdS58YAwRBixZVQ"
data-ws-component="Text">
{"XYZ Startups"}
</Text>
</Box>
</Box>
</Box>
<Box
data-ws-id="TXmpGtyWpfcLOy_-9tQ1o"
data-ws-component="Box">
<Box
data-ws-id="QxdVdHCMotF0QUkYvk65x"
data-ws-component="Box">
<Box
data-ws-id="z8qJ-XHM0ohThX8b456Nt"
data-ws-component="Box">
<Heading
data-ws-id="EHqGGI_Y8_lm1Vy0Bwgwh"
data-ws-component="Heading">
{"\"It was a great experience\""}
</Heading>
<Box
data-ws-id="Ro9kNZVE5WlXjp6rLqWl1"
data-ws-component="Box">
<Box
data-ws-id="JXSCKrv4IOY_-EDbyHnae"
data-ws-component="Box" />
<Box
data-ws-id="r-l-s0DpNh1fmVtvP8siM"
data-ws-component="Box" />
<Box
data-ws-id="ymvp_fWOw4cf7sWj8ZSek"
data-ws-component="Box" />
<Box
data-ws-id="KUNV_X-vrBkHeO7SqvLEP"
data-ws-component="Box" />
<Box
data-ws-id="phzXFNIR02M7L_ZOU6B6p"
data-ws-component="Box" />
</Box>
</Box>
<Paragraph
data-ws-id="qI_sG3qu8FJTtuIa0a-fU"
data-ws-component="Paragraph">
{"The sentiment analysis for feedback ensures our communications are constructive and considerate, and the adaptive task prioritization keeps everyone engaged and motivated. We've become more efficient, but we haven't lost sight of the human element that drives our passion."}
</Paragraph>
</Box>
<Box
data-ws-id="aQ1yXK5MgWLKZSGPLe-oT"
data-ws-component="Box">
<Box
data-ws-id="ZybejNMMZmtS5pWxKtgiG"
data-ws-component="Box">
<Image
data-ws-id="vJE8YR7WH0K_syA4ZOzdb"
data-ws-component="Image"
src={"/assets/linkedin-sales-solutions-QgYvORVDdd8-unsplash_Xm_WpENtQPgyvXKExi_tB.jpeg"} />
</Box>
<Box
data-ws-id="gKo9c7lMJ6HBJTM-rHNG4"
data-ws-component="Box">
<Text
data-ws-id="Mxy44fiOBLc7vHcR4M5IY"
data-ws-component="Text">
{"Emily, Project Lead"}
</Text>
<Text
data-ws-id="6_sr5zpGilkGwXfe-it4c"
data-ws-component="Text">
{"Global Nonprofit Initiative"}
</Text>
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="j2yWzrb47b0pr-JHIBoBp"
data-ws-component="Box">
<Box
data-ws-id="1JJwCx6wkEaht02Ev5L8s"
data-ws-component="Box">
<Heading
data-ws-id="wbINRcQA5mR3A4RQfyKKd"
data-ws-component="Heading">
{"Choose the Perfect Plan for Your Team's Success"}
</Heading>
</Box>
<Slot
data-ws-id="C76iiK0bavOWVLWDt3fdP"
data-ws-component="Slot">
<Fragment
data-ws-id="cKEfbHO_Z62b419KEeDuD"
data-ws-component="Fragment">
<Box
data-ws-id="-Ns0a4fns6nARAsaY9w-j"
data-ws-component="Box">
<Box
data-ws-id="Jn-o7ilBBp7XQ5CTL0i3L"
data-ws-component="Box">
<Box
data-ws-id="rIx2T8qZCYzBESwFnYGl1"
data-ws-component="Box">
<Box
data-ws-id="3thIc18CdC4qfHc0oG3fS"
data-ws-component="Box">
<Box
data-ws-id="qJjE-g7_90Hcn5OazMAkz"
data-ws-component="Box">
<Text
data-ws-id="hAyuZ-RAWMquhZWZ5XAOJ"
data-ws-component="Text">
{"Free"}
</Text>
<Heading
data-ws-id="j7JHZA1WgR3TlX8kuO1Ww"
data-ws-component="Heading">
{"Free for everyone"}
</Heading>
</Box>
<Separator
data-ws-id="aKfUglcP9uH-rk1U6VmEw"
data-ws-component="Separator" />
<Box
data-ws-id="flXzm6ByPWPg8IsUQ3bGH"
data-ws-component="Box">
<Box
data-ws-id="Ob3zrG9uqaNgp97BRCrMh"
data-ws-component="Box">
<Image
data-ws-id="7eeo4T54Zwgt3tWura-mA"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="VEDjYSbUNLfs_gw66cRtA"
data-ws-component="Text">
{"Unlimited members"}
</Text>
</Box>
<Box
data-ws-id="u1YblY88u8BpkPEcsxZvY"
data-ws-component="Box">
<Image
data-ws-id="uNMvbM7OJ-ekHeqBKVpP0"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="cqAGQfqCDRyLI_fqHa5fH"
data-ws-component="Text">
{"250 issues (unlimited archived)"}
</Text>
</Box>
<Box
data-ws-id="X-m8nDACcMhbhNFaf2tZl"
data-ws-component="Box">
<Image
data-ws-id="rkPC2m68n1jyS33GgQXGu"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="PHgbVAJhS2lQ-jjkQ4FPJ"
data-ws-component="Text">
{"Import and export"}
</Text>
</Box>
<Box
data-ws-id="CYllBijBgetZHdEXD00T5"
data-ws-component="Box">
<Image
data-ws-id="JiCzO1mTWL9p4BfgXOTIM"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="C-yFbnR4GLrbl9J_fpgsX"
data-ws-component="Text">
{"Integrations, APIs, webhooks"}
</Text>
</Box>
</Box>
</Box>
<Link
data-ws-id="q9KyCG6eZg_SGof6mtO0P"
data-ws-component="Link"
href={"/pricing"}
prefetch={"intent"}>
{"Free"}
</Link>
</Box>
</Box>
<Box
data-ws-id="RirPNBndJmlwR1n0tNtyW"
data-ws-component="Box">
<Box
data-ws-id="qSrcVqlMgZuZQb8lZp6ci"
data-ws-component="Box">
<Box
data-ws-id="bFn8XpRKdwfy79lM24Syb"
data-ws-component="Box">
<Box
data-ws-id="01pRKVtyl1hcAQpQIJ6lj"
data-ws-component="Box">
<Text
data-ws-id="xNlkQ6IeWFEhyjPq58gTv"
data-ws-component="Text">
{"Standard"}
</Text>
<Heading
data-ws-id="2wy_t_EAHh3Lyia7jx2Tw"
data-ws-component="Heading">
{"$8 per user/month"}
</Heading>
</Box>
<Separator
data-ws-id="iSKIzKb3fv1A-wVodUBgV"
data-ws-component="Separator" />
<Box
data-ws-id="zuhl8Owhn-2uwqEZ_xEYB"
data-ws-component="Box">
<Box
data-ws-id="PhuPRBHe-rI6A1CTWLlnd"
data-ws-component="Box">
<Text
data-ws-id="tHqoib_BIUFE7nvi5B4AD"
data-ws-component="Text">
{"Everything in Free, plus..."}
</Text>
</Box>
<Box
data-ws-id="n_l9vBuXrMAWvahH1NTEU"
data-ws-component="Box">
<Image
data-ws-id="Pdyl1fng7S006l5xQvjIX"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="6cHYYQ0t02ZW8FwWPnKKF"
data-ws-component="Text">
{"Unlimited issues and file uploads"}
</Text>
</Box>
<Box
data-ws-id="EdVywKKrjml9RQRAwIJ1g"
data-ws-component="Box">
<Image
data-ws-id="D6weP7N8AT6j-3NRnZcQO"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="YpqpFFvAgsMmOTlCNdHbT"
data-ws-component="Text">
{"Guest accounts, private teams"}
</Text>
</Box>
<Box
data-ws-id="LuC99KxBaS1cfoASgXDee"
data-ws-component="Box">
<Image
data-ws-id="zoRtbOgN0SVwrBkBRp13U"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="P6qIWficJXyfkIrvEH5k7"
data-ws-component="Text">
{"Admin tools"}
</Text>
</Box>
</Box>
</Box>
<Link
data-ws-id="YKPWqa77s9U-6XUNigvTG"
data-ws-component="Link"
href={"/pricing"}>
{"Standard"}
</Link>
</Box>
</Box>
<Box
data-ws-id="QCRnRnWDS5lilxAd9Ai_C"
data-ws-component="Box">
<Box
data-ws-id="2xiKzSplG7rNQoT76D0tz"
data-ws-component="Box">
<Box
data-ws-id="AuVcBecFSASMvRxU5WdMs"
data-ws-component="Box">
<Box
data-ws-id="_kIHOdhzPM_Q-xdKDRCIb"
data-ws-component="Box">
<Text
data-ws-id="6twHyszYQvnIAYxfdnKyo"
data-ws-component="Text">
{"Plus"}
</Text>
<Heading
data-ws-id="xAoOWH44wwjOfOObRnXzw"
data-ws-component="Heading">
{"$14 per user/month"}
</Heading>
</Box>
<Separator
data-ws-id="MizaMZbMNqwnIsCddIp9N"
data-ws-component="Separator" />
<Box
data-ws-id="FSNwRMsds6fK1plSvlygz"
data-ws-component="Box">
<Box
data-ws-id="LMMlDSLfDaGBr-57cwUQS"
data-ws-component="Box">
<Text
data-ws-id="ySdqGrE-RX6osFl60zNdf"
data-ws-component="Text">
{"Everything in Standard, plus..."}
</Text>
</Box>
<Box
data-ws-id="qHT6r5-lnpYs3XTV1Ye6P"
data-ws-component="Box">
<Image
data-ws-id="bjchn2889dazpw9_995WW"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="XemvmOtK4EeZFWhXP4BEN"
data-ws-component="Text">
{"SAML / Single Sign On"}
</Text>
</Box>
<Box
data-ws-id="9wgH-lbI69o1ioXiNsebJ"
data-ws-component="Box">
<Image
data-ws-id="5UYnbK731H1nAqKFpVpc-"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="AWAXrmytNYbmnVt0KHhqf"
data-ws-component="Text">
{"Advanced authentication controls"}
</Text>
</Box>
<Box
data-ws-id="nRz8ZHiiklXmDaYfGq834"
data-ws-component="Box">
<Image
data-ws-id="08vFSEeQmjCeSIuqtiE34"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="vPs9trmbHznVkdVnHEJvL"
data-ws-component="Text">
{"Linear insights and SLAs"}
</Text>
</Box>
<Box
data-ws-id="fjysnt3-EORHjzAdrdvuY"
data-ws-component="Box">
<Image
data-ws-id="LzH861PHwJY52nGb3SGYr"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="bSlGiOi5JlBEVdXvEGTxS"
data-ws-component="Text">
{"Priority support"}
</Text>
</Box>
</Box>
</Box>
<Link
data-ws-id="D9Ma82venPH1VTWNbgygy"
data-ws-component="Link"
prefetch={"intent"}>
{"Plus"}
</Link>
</Box>
</Box>
</Box>
</Fragment>
</Slot>
<Box
data-ws-id="1msfU4Ntb847TQoTq8mNa"
data-ws-component="Box">
<Text
data-ws-id="hYEZshdNFOd_5N7uuilr_"
data-ws-component="Text">
{"Discover flexible and affordable options to suit your project management needs"}
</Text>
<Link
data-ws-id="Hu8a8-JZ01633Ah4v7Nwf"
data-ws-component="Link"
prefetch={"intent"}>
{"Compare our Plans"}
</Link>
</Box>
</Box>
<Box
data-ws-id="m9IVVvrpGZ5RPVTmDMAgo"
data-ws-component="Box">
<Box
data-ws-id="plbVtYQv9Qnf068n2khIn"
data-ws-component="Box">
<Box
data-ws-id="qkOwk6i2dmRz5aqYBY7y1"
data-ws-component="Box">
<Box
data-ws-id="Va1QQAkOmJRW8gUv2-no7"
data-ws-component="Box">
<Heading
data-ws-id="kZbVTgv73E7AXwKUAD2vy"
data-ws-component="Heading">
{"Unlock Your Team's Full Potential!"}
</Heading>
<Text
data-ws-id="mckX_PoBrpjjDd6I_axNt"
data-ws-component="Text">
{"Take the first step towards human-centered project management excellence"}
</Text>
</Box>
<Link
data-ws-id="yUIliS0D6Myn_k-oBP1Qf"
data-ws-component="Link">
{"Get started with Free"}
</Link>
</Box>
</Box>
</Box>
</Box>
<Slot
data-ws-id="_NqZ9fD9LqNEc09fvDDd4"
data-ws-component="Slot">
<Fragment
data-ws-id="LXAE0omYOBDRhwHgmjbxd"
data-ws-component="Fragment">
<Box
data-ws-id="etSoQ_YpqbbjYSdf5gDn_"
data-ws-component="Box">
<Box
data-ws-id="T3kf2U4vSUW1jD4y_NEma"
data-ws-component="Box">
<Box
data-ws-id="_5z42eLI3fQfzg74Ywbb1"
data-ws-component="Box">
<Link
data-ws-id="8_lYbS23oem75lqyneJKk"
data-ws-component="Link">
{"SaaS Product"}
</Link>
<Box
data-ws-id="ZyWzCL9VJFsmbTZBNU9-c"
data-ws-component="Box">
<Text
data-ws-id="xJocVo6XEiFAGYZU4WEBy"
data-ws-component="Text">
{"Company"}
</Text>
<Link
data-ws-id="OemFDMxMz1dQm6ZNizOMu"
data-ws-component="Link">
{"Team"}
</Link>
<Link
data-ws-id="RyCe2Bi_tJJxSIa6o--Yd"
data-ws-component="Link">
{"Privacy Policy"}
</Link>
<Link
data-ws-id="fymS9Wubd_R1Ni-24Zyx6"
data-ws-component="Link">
{"Terms of Service"}
</Link>
</Box>
</Box>
<Box
data-ws-id="jNyPk4jlM6WQIun_94FT1"
data-ws-component="Box">
<Box
data-ws-id="tAD0q_c3Lcz3S18VRY9VO"
data-ws-component="Box">
<Text
data-ws-id="dJ3D3qquPPEVbf4FQytOh"
data-ws-component="Text">
{"Community"}
</Text>
<Link
data-ws-id="KF0zY92pvFsNrmUkiD2iq"
data-ws-component="Link">
{"Github"}
</Link>
<Link
data-ws-id="k_TUj7O7myu3xDr7wGUNx"
data-ws-component="Link">
{"Discord"}
</Link>
<Link
data-ws-id="dLWBQCL9gyAllSg5RXwyU"
data-ws-component="Link">
{"Twitter"}
</Link>
<Link
data-ws-id="GFaKIM1XZQEAZ-qwxKOx_"
data-ws-component="Link">
{"Product Hunt"}
</Link>
</Box>
<Box
data-ws-id="EtrG_tdm2KROkPiB9DlEM"
data-ws-component="Box">
<Text
data-ws-id="sQd2JlvN3_sraUU2JjqrV"
data-ws-component="Text">
{"Product"}
</Text>
<Link
data-ws-id="_-DoDHqUkbX9m6W1L4jk_"
data-ws-component="Link">
{"Pricing"}
</Link>
<Link
data-ws-id="av5H5w4bddISdUjP9Fxl0"
data-ws-component="Link">
{"Download"}
</Link>
<Link
data-ws-id="CP_4Oip6tvDePQJWy5Pma"
data-ws-component="Link">
{"Source Code"}
</Link>
</Box>
</Box>
</Box>
</Box>
</Fragment>
</Slot>
<Slot
data-ws-id="VTKV5TWPZ3G6YydCwzqBh"
data-ws-component="Slot">
<Fragment
data-ws-id="TpTp2RjbCtW5ofWZSiagR"
data-ws-component="Fragment">
<Link
data-ws-id="UZtdu19rzJ0V6K_-TQfot"
data-ws-component="Link"
href={"https://webstudio.is/"}
prefetch={"none"}
target={"_blank"}
aria-label={""}
rel={"nofollow"}
rel={"nofollow"}
rel={"nofollow"}>
<Image
data-ws-id="xP5kvTqG1Ud1udrWZC0cD"
data-ws-component="Image"
src={"/assets/logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg"}
alt={""}
loading={"eager"}
aria-hidden={true} />
<Text
data-ws-id="dt6LFeOnmEKrCnCGPuGeB"
data-ws-component="Text">
{"Built with Webstudio"}
</Text>
</Link>
</Fragment>
</Slot>
</Body>
}


export { Page }


  export const pagesPaths = new Set(["","/pricing","/about"])

  export const formsProperties = new Map<string, { method?: string, action?: string }>([])
  
