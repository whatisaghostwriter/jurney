/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { type ReactNode, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset, ImageAsset, SiteMeta } from "@webstudio-is/sdk";
import { Fragment as Fragment, Box as Box, Text as Text, Slot as Slot, Heading as Heading, Image as Image, Separator as Separator, Button as Button, HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";
import { Link as Link, Body as Body } from "@webstudio-is/sdk-components-react-remix";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";

export const fontAssets: Asset[] = [{"id":"1e1bfb48-4b7b-4a0b-bd39-87f504ac9e95","name":"SpaceGrotesk_wght__2FXqrSM6Qb5IUNmO8wuzl.woff2","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":49256,"type":"font","createdAt":"2023-06-29T05:05:10.384Z","format":"woff2","meta":{"family":"Space Grotesk","variationAxes":{"wght":{"name":"Weight","min":300,"default":300,"max":700}}}}]
export const imageAssets: ImageAsset[] = [{"id":"60355699-b9ef-4c0c-8f28-73b15f7a5972","name":"Features_1.1_C4sg2-k5JE9lwGH1oFAxX.jpg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":521864,"type":"image","format":"jpeg","createdAt":"2023-08-08T06:52:24.158Z","meta":{"width":1920,"height":1080}},{"id":"b98b1840-6ce8-406b-87bc-124b8d110013","name":"Features_1.3_sCXJ-BElFe5G5qdreXLl2.jpg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":438504,"type":"image","format":"jpeg","createdAt":"2023-08-08T06:52:24.089Z","meta":{"width":1080,"height":1080}},{"id":"221efd0c-6cdb-4aae-9991-de8e398ffcb6","name":"Features_1.2_VgPZ6iAQigOpBf-Mn33W3.jpg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":618605,"type":"image","format":"jpeg","createdAt":"2023-08-08T06:52:24.044Z","meta":{"width":1080,"height":1080}},{"id":"ab55f657-6dca-43a9-9e5e-e8c44bcf1c8d","name":"Features_2.4_2wCq34wGy7mXEZheN65Ht.jpg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":272626,"type":"image","format":"jpeg","createdAt":"2023-08-04T00:15:01.092Z","meta":{"width":1080,"height":1080}},{"id":"40d19ca6-9520-4382-8a5d-eb1448ebed89","name":"Features_2.1_NIscvc7PVCAtEejnPT2I3.png","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":56703,"type":"image","format":"png","createdAt":"2023-07-28T05:41:38.887Z","meta":{"width":1080,"height":1080}},{"id":"5c9b83a3-b0b8-4774-a3f0-f1a2754bb70b","name":"Features_2.3_x8WxiEDSffKUEbdqQdEhA.png","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":166040,"type":"image","format":"png","createdAt":"2023-07-28T05:37:40.660Z","meta":{"width":1080,"height":1080}},{"id":"570689c3-6b4d-45c8-b39e-2d620a8b5b3d","name":"Features_2.2_iIeJXZR4vR2mQD4yPOIW1.png","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":184199,"type":"image","format":"png","createdAt":"2023-07-28T05:37:21.235Z","meta":{"width":1080,"height":1080}},{"id":"93021a48-af20-427b-a189-335e95fbd973","name":"Features_2.1_o27GLo-ZEDSqvwMxU5maT.png","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":64401,"type":"image","format":"png","createdAt":"2023-07-28T05:37:05.057Z","meta":{"width":1080,"height":1080}},{"id":"6cd2cc3e-05a9-4335-b8d5-c44e02752ef4","name":"andrew-power-y9L5-wmifaY-unsplash_dMh4R7uKXN1lnM5k2QTmt.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":363817,"type":"image","format":"jpeg","createdAt":"2023-07-28T00:01:38.654Z","meta":{"width":1920,"height":1920}},{"id":"b281a9b4-9df8-4325-a931-e59414c95ff6","name":"clay-elliot-mpDV4xaFP8c-unsplash_TxKpZ1DjGYzXIYNJ0iwW1.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":416475,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:54:28.790Z","meta":{"width":1920,"height":1920}},{"id":"d106fb5b-adcb-4f9e-ac2b-ca1a3a895f63","name":"leilani-angel-K84vnnzxmTQ-unsplash_hTwP6Ll8K4KCXsx4D9Ef0.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":199889,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:54:04.664Z","meta":{"width":1080,"height":1080}},{"id":"be5f4466-449a-424d-9c2a-8c9969ba1422","name":"linkedin-sales-solutions-QgYvORVDdd8-unsplash_Xm_WpENtQPgyvXKExi_tB.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":381521,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:53:45.665Z","meta":{"width":1920,"height":1920}},{"id":"e7a5b6f4-1a35-4213-bc7a-c6a1f031c16c","name":"annie-spratt-dWYU3i-mqEo-unsplash_Bxq7tG0vc6Bhsb97AZfEk.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":433712,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:46:12.750Z","meta":{"width":1920,"height":1281}},{"id":"cfcf5c90-400a-49a5-9805-79392785e5c9","name":"thai-an-E2Yd6K2A3fE-unsplash_Tg8ZBdBE4SGkh2_5hQ0tP.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":231981,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:45:31.070Z","meta":{"width":1920,"height":1920}},{"id":"96e625a7-e04d-4409-8915-618337112dcc","name":"joel-mott-VWGPhJyzMQ4-unsplash_-mcHxc58jA6kom3rcyacw.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":248005,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:43:37.368Z","meta":{"width":1920,"height":1920}},{"id":"50310230-ba74-4270-941a-b4c47b01dac3","name":"vicky-hladynets-C8Ta0gwPbQg-unsplash_JS3NJkGLTPL9D96tXRp8R.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":250306,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:43:11.295Z","meta":{"width":1080,"height":1080}},{"id":"b40f3847-bbee-4a1d-bf17-599cc25bee70","name":"christina-wocintechchat-com-SJvDxw0azqw-unsplash_2Vhjv5ot3JkLy18j5ONvm.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":514994,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:37:13.548Z","meta":{"width":1920,"height":1920}},{"id":"0d20baae-c818-4e27-b8db-2aba9bb9abc8","name":"bruce-mars-8YG31Xn4dSw-unsplash_KJktq3e6bvg4m93KCZgFG.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":258631,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:35:49.779Z","meta":{"width":1920,"height":1920}},{"id":"a5d7152a-d834-44c8-9d49-636465a12e93","name":"daria-pimkina-tYaccl19A3Q-unsplash_CxNvWGlbLj4PmQinO9rYg.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":255793,"type":"image","format":"jpeg","createdAt":"2023-07-27T23:35:25.326Z","meta":{"width":1315,"height":1315}},{"id":"c0b45f62-5f15-4256-93fa-cf57e90179d7","name":"rachel-mcdermott-0fN7Fxv1eWA-unsplash_YSxowXdHZzaAV4_H9RO5I.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":169321,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:24:51.545Z","meta":{"width":1920,"height":1498}},{"id":"c2131080-1201-4824-af48-a9e4ee4cfed6","name":"ludovic-migneault-EZ4TYgXPNWk-unsplash_C5HgJG2-Yl2EIltDMzCpt.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":480646,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:23:34.882Z","meta":{"width":1280,"height":1920}},{"id":"53313698-3a84-41e2-b33d-ef50977e34b7","name":"saksham-gangwar-YVgOh8w1R4s-unsplash_iTt_4ilWzl7GK29jeO_y9.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":204662,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:11:52.132Z","meta":{"width":1080,"height":1234}},{"id":"3fcfb32c-61bf-4c3a-9815-276b92cf8b1d","name":"edward-cisneros-_H6wpor9mjs-unsplash_wSHJ4intTHufcvH563kj2.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":229318,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:10:53.843Z","meta":{"width":1080,"height":1080}},{"id":"6782c103-c037-4055-8939-c3c79222aa82","name":"jake-nackos-IF9TK5Uy-KI-unsplash_PGNJ6DB8F_VD49AWLsQcW.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":232394,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:10:28.055Z","meta":{"width":1526,"height":1920}},{"id":"89ff7c35-fcda-4ef1-a230-6270063654a0","name":"luis-villasmil-hh3ViD0r0Rc-unsplash_59b2CxQV6HODjB0t2loEF.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":166816,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:09:55.826Z","meta":{"width":1080,"height":1080}},{"id":"01042289-d848-4b0c-888d-c76714f563a5","name":"christina-wocintechchat-com-7JGjoSVfIDM-unsplash_2iRG6rykIJrYxZ5IjPWGj.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":272661,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:09:06.690Z","meta":{"width":1282,"height":1920}},{"id":"2b223d24-f02f-40cb-9aa6-6050749124ca","name":"foto-sushi-6anudmpILw4-unsplash_9L8RY7TY_Q1EPcvxO_oFX.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":170171,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:08:44.697Z","meta":{"width":1080,"height":1080}},{"id":"07a1a75d-dd0d-418d-bf16-f183363b5fd8","name":"sigmund-jzz_3jWMzHA-unsplash_b_VEz4vDDo56YTgGRuVhA.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":231064,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:08:03.041Z","meta":{"width":1080,"height":1080}},{"id":"ca3fb0f6-9035-403c-98f4-01164f90b15b","name":"ashton-bingham-EQFtEzJGERg-unsplash_n3B2v0oYFr8F3I9AcvNQP.jpeg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":482451,"type":"image","format":"jpeg","createdAt":"2023-07-27T22:07:20.449Z","meta":{"width":1920,"height":1082}},{"id":"8e7b397d-ef04-4db0-bc77-ed04a0b0b54e","name":"Unlimited_k0pTiJKGKwn0-RBThmp8B.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":410,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.802Z","meta":{"width":24,"height":25}},{"id":"52504608-a171-45d5-a013-8a179b8fa059","name":"Star_Half_Full_gd_iVgLUHvt_V-1JmbFSP.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":958,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.304Z","meta":{"width":25,"height":25}},{"id":"d0fa29af-3a2d-4f24-b2b5-68a4aa11592f","name":"Star_Full_ImSm64EndSSy1xa20o-Q2.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":798,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.190Z","meta":{"width":26,"height":25}},{"id":"b78e8bfa-0186-43f1-92f5-090300837afe","name":"Check_ZuBsfCU5Bi_RHS54ItSG0.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":221,"type":"image","format":"svg","createdAt":"2023-07-12T20:27:21.029Z","meta":{"width":26,"height":25}},{"id":"f82e1824-bb7d-4f55-a26d-1f25066673a7","name":"Twitter_Icon_White_E0esaSuquGdAthJcDsJlI.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":845,"type":"image","format":"svg","createdAt":"2023-06-30T22:56:44.856Z","meta":{"width":16,"height":13}},{"id":"e04b2f18-eff3-43d7-a8a5-e0fe61d8f3d3","name":"logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg","description":null,"projectId":"9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99","size":16276,"type":"image","format":"svg","createdAt":"2023-03-24T21:43:47.942Z","meta":{"width":280,"height":211}}]
export const pageData: PageData = {"page":{"id":"PHeEs4hMZj33Zb35FsLBN","name":"Pricing","title":"Pricing","meta":{"description":""},"rootInstanceId":"2PFYynoY82EW6YhZd359t","path":"/pricing"}};
export const user: { email: string | null } | undefined = {"email":"fnoxb5691@gmx.com"};
export const projectId = "9a12a980-4d1e-4975-bdf5-6bb5cc8cfc99";

const Page = () => {
let [sheetOpen, set$sheetOpen] = useState<any>(false)
let onOpenChange = (open: any) => {
sheetOpen = open
set$sheetOpen(sheetOpen)
}
return <Body
data-ws-id="2PFYynoY82EW6YhZd359t"
data-ws-component="Body">
<Slot
data-ws-id="fV1dSPiojY8LffmRahcoE"
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
data-ws-id="UO1BEGnr4YkKPt0MT8QWI"
data-ws-component="Box">
<Box
data-ws-id="Ln2UtZuKuuwhTJi9J-r4m"
data-ws-component="Box">
<Heading
data-ws-id="0dAeQkUiFU-8swg9sF3zc"
data-ws-component="Heading">
{"Pricing"}
</Heading>
<Text
data-ws-id="H6FlRRIKIGH2qBTOLDpUC"
data-ws-component="Text">
{"We've crafted pricing options that cater to businesses of all sizes, from startups to established enterprises."}
</Text>
</Box>
<Slot
data-ws-id="ZHJ34Ju85qYbDZLk6rNSB"
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
data-ws-id="P3XKiC1FtxBUoOsXWG5Uw"
data-ws-component="Box">
<Box
data-ws-id="R98HKnes-qNJzV-ep7Jti"
data-ws-component="Box">
<Box
data-ws-id="y8TXQ-NYjqDhNm5y7aHVg"
data-ws-component="Box">
<Heading
data-ws-id="7xyEGRIE6XZhQdCzy0Dig"
data-ws-component="Heading">
{"Enterprise"}
</Heading>
<Text
data-ws-id="9CstwGpb9yG5cjTh0fCCj"
data-ws-component="Text">
{"Built for Enterprises who want to scale with confidence, Linear Enterprise offers advanced security, powerful admin controls, and more."}
</Text>
</Box>
<Separator
data-ws-id="K4qKBFthQ0-nagRpIxoc9"
data-ws-component="Separator" />
<Box
data-ws-id="CHqci2ocxhKqwpzIkMZa9"
data-ws-component="Box">
<Box
data-ws-id="vPQhvBGDl_k5zmj-6Us5f"
data-ws-component="Box">
<Box
data-ws-id="g6j0Djz3piKtnh3WyU_U1"
data-ws-component="Box">
<Box
data-ws-id="OgwB18bvbE8RP5qhb6pa9"
data-ws-component="Box">
<Image
data-ws-id="QiOOQC1dS-VEBD5lbcL-A"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="Cs147WBfh2NGks7IKdfO-"
data-ws-component="Text">
{"No limits"}
</Text>
</Box>
<Box
data-ws-id="eBG7ghfiuvhy_TtLTyMED"
data-ws-component="Box">
<Image
data-ws-id="STS2foKcx641TAfYBxfqB"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="oeONApm_LMhw2QPkXqFMp"
data-ws-component="Text">
{"On-premises"}
</Text>
</Box>
<Box
data-ws-id="z-rk6MezOS_BfB3OoIo-r"
data-ws-component="Box">
<Image
data-ws-id="EZ-IGQMFPvuuuVvwf29KW"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="18_t7N2C1xkLZYYH_Jw1M"
data-ws-component="Text">
{"Enterprise SSO"}
</Text>
</Box>
</Box>
<Box
data-ws-id="MfIXa_tcB0lupuMjjkh_k"
data-ws-component="Box">
<Box
data-ws-id="bJ5NIh4mBSqnzxpSk8wXU"
data-ws-component="Box">
<Image
data-ws-id="Vz-F-AW2jbbQdj6HKmwxl"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="WnzHG3cXdg9-x5_u9V0YP"
data-ws-component="Text">
{"Granular permissions"}
</Text>
</Box>
<Box
data-ws-id="v--zuNphpFJDR0VPcGxu6"
data-ws-component="Box">
<Image
data-ws-id="Nghd5o1YnnSxepvl2b9wJ"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
<Text
data-ws-id="149vaPz-M5SGVibxgxwre"
data-ws-component="Text">
{"Customer success manager"}
</Text>
</Box>
</Box>
</Box>
<Link
data-ws-id="gLh44Sz2K9RE3PyVRS61f"
data-ws-component="Link">
{"Contact Sales"}
</Link>
</Box>
</Box>
</Box>
<Box
data-ws-id="zlseBM4CEv_ZGJf_0dqS3"
data-ws-component="Box">
<Box
data-ws-id="ywI07nAaOlVkzjW1Stzc-"
data-ws-component="Box">
<Box
data-ws-id="zsrgoJ8oKyEyl9_4eWtRG"
data-ws-component="Box" />
<Box
data-ws-id="bZdFZ0ZMdhYTcmWVlD0kg"
data-ws-component="Box">
<Text
data-ws-id="88tHBAMxt_dIY-lwsxmaE"
data-ws-component="Text">
{"Free"}
</Text>
</Box>
<Box
data-ws-id="3OcZC2DDt5kpF0quwD7gK"
data-ws-component="Box">
<Text
data-ws-id="51NGffY6vvNajTR4H-eVi"
data-ws-component="Text">
{"Standard"}
</Text>
</Box>
<Box
data-ws-id="JHH_74tIR1R8IMUbzYUic"
data-ws-component="Box">
<Text
data-ws-id="vspGe9wR84k0XvkJywkRY"
data-ws-component="Text">
{"Plus"}
</Text>
</Box>
</Box>
<Box
data-ws-id="4SAaaXUMUBWwfNXT4hqLX"
data-ws-component="Box">
<Box
data-ws-id="xVGvr31CLvb0ce5azrnIu"
data-ws-component="Box">
<Box
data-ws-id="gt8coZ-Io7TL8DI9Kcb29"
data-ws-component="Box">
<Text
data-ws-id="aqq_rdTp27njZqgtj0Ktn"
data-ws-component="Text">
{"Usage"}
</Text>
</Box>
</Box>
<Box
data-ws-id="aW3E7Y09PPP_2H1jqPf9A"
data-ws-component="Box">
<Box
data-ws-id="GECc2CBknuyWXffP2lBsR"
data-ws-component="Box">
<Text
data-ws-id="UhvE4ONyUSiQdJctOIXG3"
data-ws-component="Text">
{"Members"}
</Text>
</Box>
<Box
data-ws-id="2j093ujXsie0EmFMEz2Km"
data-ws-component="Box">
<Text
data-ws-id="5XdSwwvjqbD78ko22h_-Y"
data-ws-component="Text">
{"Unlimited"}
</Text>
<Image
data-ws-id="eyTmXamNQr-Mx88PMNzlk"
data-ws-component="Image"
src={"/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"} />
</Box>
<Box
data-ws-id="TsdFkCwPRsNi7PGzufvyO"
data-ws-component="Box">
<Text
data-ws-id="hKROoUafsWkDfrPPmw-SM"
data-ws-component="Text">
{"Unlimited"}
</Text>
<Image
data-ws-id="SNqHWl3-g4S2qPzsrZ3Iw"
data-ws-component="Image"
src={"/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"} />
</Box>
<Box
data-ws-id="-2KPkzAkedk-G2L8Ai2B2"
data-ws-component="Box">
<Text
data-ws-id="XBQAC906MyuDcZf46PLTd"
data-ws-component="Text">
{"Unlimited"}
</Text>
<Image
data-ws-id="_7to2SJiESkHdtK2dzMwc"
data-ws-component="Image"
src={"/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"} />
</Box>
</Box>
<Box
data-ws-id="elXC9JAVBja02fLvZ0rWD"
data-ws-component="Box">
<Box
data-ws-id="q-gWyuVCHeMiB02Wiw_Wn"
data-ws-component="Box">
<Text
data-ws-id="DpjARR4BwZRDgK7EAslbw"
data-ws-component="Text">
{"File upload size"}
</Text>
</Box>
<Box
data-ws-id="o6B_73_ObmOMyeb4PWZaD"
data-ws-component="Box">
<Text
data-ws-id="2Dpc9RH1qZH5UEMRoo-KP"
data-ws-component="Text">
{"10 MB"}
</Text>
</Box>
<Box
data-ws-id="MlEHhaV7T_pa3b7FlH6lD"
data-ws-component="Box">
<Text
data-ws-id="ImMhUxcqKKRNh0RjCG1QK"
data-ws-component="Text">
{"Unlimited"}
</Text>
<Image
data-ws-id="ui0WIfkNdkXiIgwbyvaFU"
data-ws-component="Image"
src={"/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"} />
</Box>
<Box
data-ws-id="tPiZQBBBgo1AhW6jStL1T"
data-ws-component="Box">
<Text
data-ws-id="1b5CM00KtyuGJT3qkyIBL"
data-ws-component="Text">
{"Unlimited"}
</Text>
<Image
data-ws-id="nrfoyoHXMd-j9fnpPuX-P"
data-ws-component="Image"
src={"/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"} />
</Box>
</Box>
<Box
data-ws-id="uk1qswGFDeOS8aqNkKy5n"
data-ws-component="Box">
<Box
data-ws-id="JL-qGjPyp-idmwC1PoX5R"
data-ws-component="Box">
<Text
data-ws-id="SI0npS6I5nbC8cQIbuQoU"
data-ws-component="Text">
{"File upload volume"}
</Text>
</Box>
<Box
data-ws-id="rJqjTLUlheZV5xM2cN4qy"
data-ws-component="Box">
<Text
data-ws-id="RNO7RG50HVWgU4Zr9wopC"
data-ws-component="Text">
{"150 MB / month"}
</Text>
</Box>
<Box
data-ws-id="ulLH7JKcYXKJltVk4HlGy"
data-ws-component="Box">
<Text
data-ws-id="g_I3fggwgNlS8czYisPu1"
data-ws-component="Text">
{"Unlimited"}
</Text>
<Image
data-ws-id="xm1IR9MriaW6I7luMJqnW"
data-ws-component="Image"
src={"/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"} />
</Box>
<Box
data-ws-id="mhwC32pigAdHJl89PKsJq"
data-ws-component="Box">
<Text
data-ws-id="UQKCOb2-jI7UsZZvJqqb0"
data-ws-component="Text">
{"Unlimited"}
</Text>
<Image
data-ws-id="6cEVfVYk4HN72m4MX4xbf"
data-ws-component="Image"
src={"/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"} />
</Box>
</Box>
<Box
data-ws-id="xPMOVidnzw39XVt9rL3La"
data-ws-component="Box">
<Box
data-ws-id="Vh9n2qy845XtiWq8BkxLU"
data-ws-component="Box">
<Text
data-ws-id="0btA5XZ5Q9HyokOCVg5bf"
data-ws-component="Text">
{"Issues (excluding Archive)"}
</Text>
</Box>
<Box
data-ws-id="mdsE8hlaxK0eSvTJM6YeQ"
data-ws-component="Box">
<Text
data-ws-id="uQYj21W1VhK6s3aEDMZ_0"
data-ws-component="Text">
{"150 MB / month"}
</Text>
</Box>
<Box
data-ws-id="jMpLWK6ivfXV7SOpQSssb"
data-ws-component="Box">
<Text
data-ws-id="pIDk_tHvFVmBOaVB8Uqp9"
data-ws-component="Text">
{"Unlimited"}
</Text>
<Image
data-ws-id="Aald2pArulI0kUkU3wMo1"
data-ws-component="Image"
src={"/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"} />
</Box>
<Box
data-ws-id="bZfu9C01bVHYjZtNK79sn"
data-ws-component="Box">
<Text
data-ws-id="CjI2zVnGpC4TUWy6WmIhR"
data-ws-component="Text">
{"Unlimited"}
</Text>
<Image
data-ws-id="p31nT2iD9MU5PWkoIBue8"
data-ws-component="Image"
src={"/assets/Unlimited_k0pTiJKGKwn0-RBThmp8B.svg"} />
</Box>
</Box>
</Box>
<Box
data-ws-id="rter82FqZcCc4ixCr1OQr"
data-ws-component="Box">
<Box
data-ws-id="ACd0S38js8hmlG4zcv_PE"
data-ws-component="Box">
<Box
data-ws-id="BXF1LnPkQSx-SmatQJ7Es"
data-ws-component="Box">
<Text
data-ws-id="6utQydusimIZUH3sBDOGa"
data-ws-component="Text">
{"Features"}
</Text>
</Box>
</Box>
<Box
data-ws-id="aFss394Y3o-9SovgPPaOp"
data-ws-component="Box">
<Box
data-ws-id="fbCYXi36Zxh5Ofl31_lOw"
data-ws-component="Box">
<Text
data-ws-id="T7iYrocmDcnFvsxZ6yPsM"
data-ws-component="Text">
{"Issues, projects, and cycles"}
</Text>
</Box>
<Box
data-ws-id="k5Z9-jMwzzGVnT1zmDZJW"
data-ws-component="Box">
<Box
data-ws-id="wmjxXuipVoZ2UfIM_EVhn"
data-ws-component="Box">
<Image
data-ws-id="rfIISmw3w7resU2pcyxDt"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="mxGYC2SVL-y7lrt4zW5sX"
data-ws-component="Box">
<Box
data-ws-id="Og1eK9fAQ5QLaFCmGM_j8"
data-ws-component="Box">
<Image
data-ws-id="g47wiZw7J30U2rhe4FCi6"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="uzSRPSDOM_IviyxgD-YKI"
data-ws-component="Box">
<Box
data-ws-id="-ityrbQYiSYEZhnjGZsgD"
data-ws-component="Box">
<Image
data-ws-id="fZw90OoZRXlsqzSPQS4y-"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
</Box>
<Box
data-ws-id="BgtCZL5g8SIyEnXIiuv4K"
data-ws-component="Box">
<Box
data-ws-id="lRIJuNtV35MAAlOdg-OFb"
data-ws-component="Box">
<Text
data-ws-id="JbwGcmuoQy0geQrSr8WUB"
data-ws-component="Text">
{"Integrations"}
</Text>
</Box>
<Box
data-ws-id="hW8l40triAwvantz1ei6x"
data-ws-component="Box">
<Box
data-ws-id="Cmcl0jNUyeik3JxkiHQ1G"
data-ws-component="Box">
<Image
data-ws-id="nx44dha0P1gB93v9wsJRB"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="jA6HpMsRNQBRNA9g3-rvi"
data-ws-component="Box">
<Box
data-ws-id="jNrbP8-g65OhiL79Jb2LS"
data-ws-component="Box">
<Image
data-ws-id="HDozw845GeRB2uLvZ7st1"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="gFZ5TfGW2KBS3lw97VlYr"
data-ws-component="Box">
<Box
data-ws-id="MlKju-2CC4hCXaWxI9WJa"
data-ws-component="Box">
<Image
data-ws-id="Ry1imH7i1gvUkGQUKAxT0"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
</Box>
<Box
data-ws-id="TNEeWzbyd4iQR_OGty8_d"
data-ws-component="Box">
<Box
data-ws-id="7Tfchjrk7cYq0jn6bsVun"
data-ws-component="Box">
<Text
data-ws-id="3T1yOpTALgKyqi4MFJXXG"
data-ws-component="Text">
{"API and Webhook access"}
</Text>
</Box>
<Box
data-ws-id="trFTppoRVw036ptpiZ-y1"
data-ws-component="Box">
<Box
data-ws-id="y-2fBW0mgMM9l-lrmYzCN"
data-ws-component="Box">
<Image
data-ws-id="J3-BhIltv0q-7fhp-dzNf"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="mMgwFxqAz8KU2z7eItbXM"
data-ws-component="Box">
<Box
data-ws-id="Jj2EQfyHQEbuBIvzOWerx"
data-ws-component="Box">
<Image
data-ws-id="JqlYhD6iJ8Ws9Vc96CzwP"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="Vp086h6MvQpOC3bU2El3A"
data-ws-component="Box">
<Box
data-ws-id="hHZjvHO4lczIEKoYHX6IT"
data-ws-component="Box">
<Image
data-ws-id="-_z540R9JO9vCdbpk4LPi"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
</Box>
<Box
data-ws-id="s8sWVFQF48bXX6_1O1QqZ"
data-ws-component="Box">
<Box
data-ws-id="iyxKRF1wBquMtbFdGNF-k"
data-ws-component="Box">
<Text
data-ws-id="l6peW4ZS92Lbx2cYfTvlU"
data-ws-component="Text">
{"Import and export"}
</Text>
</Box>
<Box
data-ws-id="zpEHYQsbTVHS1mKrmfXwu"
data-ws-component="Box">
<Box
data-ws-id="fAIdUFn45hfyQhM0ECOxB"
data-ws-component="Box">
<Image
data-ws-id="53ZaM1Ev6V7lyGlMyQ-K_"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="NSVTxlkOphsae0MY9DXSQ"
data-ws-component="Box">
<Box
data-ws-id="0gP64UrDQTJHWBPkyZeeK"
data-ws-component="Box">
<Image
data-ws-id="zNGhj3gCcI80PhKbYeHzs"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="OJs1rOVIlbz5NJmcJA_WP"
data-ws-component="Box">
<Box
data-ws-id="0mksVYzcxxq-ldQ-dNOmu"
data-ws-component="Box">
<Image
data-ws-id="VQlUsj5nwsvyttDaSeKjx"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
</Box>
<Box
data-ws-id="QohG5GvOXxCjb40OZNIwl"
data-ws-component="Box">
<Box
data-ws-id="Sqr-0ENdfkOOjDXmUED3c"
data-ws-component="Box">
<Text
data-ws-id="Z8ltSECh3fJwbnjPvK3Vj"
data-ws-component="Text">
{"Private teams"}
</Text>
</Box>
<Box
data-ws-id="28-3K6-UB9iuHsoiE_0cY"
data-ws-component="Box" />
<Box
data-ws-id="iTaHWqTXcmLueBJ4-_MIV"
data-ws-component="Box">
<Box
data-ws-id="RTXn_YXixCKsqxoPnckNS"
data-ws-component="Box">
<Image
data-ws-id="UYmcvpXFZMUyGBPhSqbUM"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="_b_NQILC5f4zS1E7onVcA"
data-ws-component="Box">
<Box
data-ws-id="vFfqHKuERdfMEVKPgeRyx"
data-ws-component="Box">
<Image
data-ws-id="JLC0FB93l-oIzB5BntCju"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
</Box>
<Box
data-ws-id="JMEWH60xNLpwD4zr09bc9"
data-ws-component="Box">
<Box
data-ws-id="ekypgAg2YtmSkct3ERiOF"
data-ws-component="Box">
<Text
data-ws-id="w2t_V0GGWRZ8D0FFaZJL7"
data-ws-component="Text">
{"Guest accounts"}
</Text>
</Box>
<Box
data-ws-id="yjFmjarjBOtzF9VSRJTmI"
data-ws-component="Box" />
<Box
data-ws-id="Q3WX1RQbDeZMvMH2yJ_W0"
data-ws-component="Box">
<Box
data-ws-id="yYAi-Xe4dfxJeJ04hIO6F"
data-ws-component="Box">
<Image
data-ws-id="q8ot2VukYX5uzPhds5bzx"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="7Ap8_NmmG6z4f3f8UL27Q"
data-ws-component="Box">
<Box
data-ws-id="GLh0YmM7yyyJknlMzwO8J"
data-ws-component="Box">
<Image
data-ws-id="genObiviobkBXKHP2x7pR"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
</Box>
<Box
data-ws-id="yahS1smY4wPXPRYhH3ZY9"
data-ws-component="Box">
<Box
data-ws-id="PwJkVO08BCHSTc8T2qKCY"
data-ws-component="Box">
<Text
data-ws-id="OfdPPsKakZTPWEXGMbIg1"
data-ws-component="Text">
{"SLAs"}
</Text>
</Box>
<Box
data-ws-id="U0_okBbsHIxsid8jhbsr-"
data-ws-component="Box" />
<Box
data-ws-id="h-9dfVT6hAX2SfxVsFcd3"
data-ws-component="Box" />
<Box
data-ws-id="ccg-NnqH06QwHZ0eKRAAJ"
data-ws-component="Box">
<Box
data-ws-id="sSMvFvA6CtZBeFSyaU4_b"
data-ws-component="Box">
<Image
data-ws-id="FT5XBwfeIh5YR_tZsopTU"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="NVYj877b3aX1V2RzMOKIQ"
data-ws-component="Box">
<Box
data-ws-id="gt-kqEkoAvDNvL2oLMC2R"
data-ws-component="Box">
<Box
data-ws-id="AlZJRpBxW7JhgGBavUVry"
data-ws-component="Box">
<Text
data-ws-id="TQAjtqhrRyNwMaUk5ha2i"
data-ws-component="Text">
{"Analytics & Reporting"}
</Text>
</Box>
</Box>
<Box
data-ws-id="NJR956RQW_Iduaf4BlXSm"
data-ws-component="Box">
<Box
data-ws-id="viMVTALfTcSKHNo-7o7Hl"
data-ws-component="Box">
<Text
data-ws-id="3Bv_kBujUovdRRxfW6ALr"
data-ws-component="Text">
{"Progress reports"}
</Text>
</Box>
<Box
data-ws-id="RxxS-RxqEGKDnuiYYwMJh"
data-ws-component="Box">
<Box
data-ws-id="HujIEpLI-vaFh0iDBjSFs"
data-ws-component="Box">
<Image
data-ws-id="D4c1W4YqRvfdxyf2f2KNu"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="EaXg-7qIiWrC1NrXChzLo"
data-ws-component="Box">
<Box
data-ws-id="CjgTo1HPg-t28TPfuwaNe"
data-ws-component="Box">
<Image
data-ws-id="eyVGarKHkpBGTw524PkcK"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
<Box
data-ws-id="FoHM7kVDiqMztVKNqXJLa"
data-ws-component="Box">
<Box
data-ws-id="4i7gPinx2lv553Q19wJbo"
data-ws-component="Box">
<Image
data-ws-id="Rg-_VcJ1UKXzPSkUvlc8y"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
</Box>
<Box
data-ws-id="J9fk4FtuX0MGuZgFucbt3"
data-ws-component="Box">
<Box
data-ws-id="msMOgJdROIhsFrDqQLYAx"
data-ws-component="Box">
<Text
data-ws-id="KGQjG0dLdEJcHHPWYsHiE"
data-ws-component="Text">
{"Insights"}
</Text>
</Box>
<Box
data-ws-id="bKPPs4yAJj0apjg8svOzi"
data-ws-component="Box" />
<Box
data-ws-id="ocgUL0ALB4SFndmjxn2fy"
data-ws-component="Box" />
<Box
data-ws-id="0FAwYuACjo3vLdC6jiSpl"
data-ws-component="Box">
<Box
data-ws-id="1xELZ1DSJzl2jvZNLP4Bl"
data-ws-component="Box">
<Image
data-ws-id="0ee9ZNAXntytkUQBaKDjs"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
</Box>
<Box
data-ws-id="gqV0jQBleg6aORSC_cAO9"
data-ws-component="Box">
<Box
data-ws-id="oy_LuuANQopI4S10rvnh6"
data-ws-component="Box">
<Text
data-ws-id="H8Q9WMwt1Ue4oAPQ1LDhM"
data-ws-component="Text">
{"Data warehouse sync"}
</Text>
</Box>
<Box
data-ws-id="B-EvJgdcrgGZL6sBa1Tc7"
data-ws-component="Box" />
<Box
data-ws-id="wuFMqTim7tpmWC_xfwqj_"
data-ws-component="Box" />
<Box
data-ws-id="_FsRoiBSdMpj0YpRM9X2y"
data-ws-component="Box">
<Box
data-ws-id="_cAd93rATyDX6Um3im0aS"
data-ws-component="Box">
<Image
data-ws-id="FR4_pqbTpHifCsbG8fBXI"
data-ws-component="Image"
src={"/assets/Check_ZuBsfCU5Bi_RHS54ItSG0.svg"} />
</Box>
</Box>
</Box>
</Box>
</Box>
</Box>
<Slot
data-ws-id="OFzNrCRa8dkz9SNK5itt0"
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
data-ws-id="SACy98L7mrmepVUjF3EDb"
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
  
