import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
// import weChatShare from './weChatShare/weChatShare';

import icon_ky from './image/img_ky.png';
import icon_xlx from './image/img_mlxlx.png';
import icon_ztf from './image/img_ztf.png';
import icon_qdy from './image/img_qdy.png';
import icon_qkl from './image/img_qkl.png';
import icon_glg from './image/img_glg.png';
import icon_yw from './image/img_lsyw.png';
import icon_cy from './image/img_xhcy.png';
import icon_eg from './image/img_fseg.png';
import icon_ftj from './image/img_ftj.png';
import icon_tlms from './image/img_tlms.png';

import Index from './container/index'

class Routes extends Component {
	render(){
		return(
			<Router>
				<div style={{height: '100%'}}>
					<Route path='/kaoya' render={()=>{
							document.title = '距離を置かずに…もっと近う、寄ってくれぬか？';
							// weChatShare({
							// 	title: '除夕，我在约定之地等您。',
							// 	desc: '除夕前夜，天空淅淅沥沥下起了雨，夜色像化不开的墨。忽然，你听到几声敲门——',
							// 	imgUrl: window.location.origin + icon_ky
							// });
							return (<Index roles='kaoya' />)
						}}
					/>
					<Route path='/xiaolongxia' render={()=>{
							document.title = 'てめぇは俺様の所有物だから、俺様につづけ。';
							// weChatShare({
							// 	title: '过年，和我待在家里！',
							// 	desc: '除夕市集里来来往往的人，叫卖声、说话声、鞭炮声震击你的耳膜，你不禁有些头痛。这时，走在前面的他忽然转过了头——',
							// 	imgUrl: window.location.origin + icon_xlx
							// });
							return (<Index roles='xiaolongxia' />)
						}}
					/>
					<Route path='/zhutongfan' render={()=>{
							document.title = 'このまま俺様のそばにいてくれりゃいいんだよ！';
							// weChatShare({
							// 	title: '过年想只和你在一起，对，就你。',
							// 	desc: '除夕夜，绚丽的烟花接连在头顶绽放，他的眼睛里有一闪一闪的小星星。你看着他，忽然很想伸手去摸摸他的头——',
							// 	imgUrl: window.location.origin + icon_ztf
							// });
							return (<Index roles='zhutongfan' />)
						}}
					/>
					<Route path='/qiudaoyu' render={()=>{
							document.title = 'ニャンたちを連れて一緒に紅葉狩りでもしよう？';
							// weChatShare({
							// 	title: '嗯..守岁，猫咪也说要等你一起。',
							// 	desc: '年夜饭酒足饭饱后，席间还在热闹地讨论着什么。你看着他悄悄起身掩上了门，于是你也跟了上去——',
							// 	imgUrl: window.location.origin + icon_qdy
							// });
							return (<Index roles='qiudaoyu' />)
						}}
					/>
					<Route path='/qiaokeli' render={()=>{
							document.title = 'この瞳に映るのは、君だけ。';
							// weChatShare({
							// 	title: '明年，在我身边绽放笑颜吧。',
							// 	desc: '大年夜，你在等一个人。他说过会来，夜里风大，你披了件衣服站在门口期待着……那一抹熟悉的红色照亮你的眼瞳——',
							// 	imgUrl: window.location.origin + icon_qkl
							// });
							return (<Index roles='qiaokeli' />)
						}}
					/>
					<Route path='/guilinggao' render={()=>{
							document.title = 'すこし…休ませてくれ。すぐに会いに行くから、心配しないで。';
							// weChatShare({
							// 	title: '别害怕，还有我在这里。',
							// 	desc: '除夕前日，周围的人走完了，只剩下你在宿舍里缓慢地整理东西。有一点迷茫，也有一点害怕……这时，身后传来一个熟悉的声音——',
							// 	imgUrl: window.location.origin + icon_glg
							// });
							return (<Index roles='guilinggao' />)
						}}
					/>
					<Route path='/yunwu' render={()=>{
							document.title = '三千世界も、夢幻にすぎぬ。';
							// weChatShare({
							// 	title: '青山之中，与你静候新岁。',
							// 	desc: '除夕之夜，山谷间悠扬的笛声响起，远远山脚下是此起彼此的烟火，对面坐着那个恬淡超然的她——曲毕，她开口道……',
							// 	imgUrl: window.location.origin + icon_yw
							// });
							return (<Index roles='yunwu' />)
						}}
					/>
					<Route path='/cuyu' render={()=>{
							document.title = 'いつかまた御侍様と会うことを信じています。';
							// weChatShare({
							// 	title: '想要和您一起，看空中的繁花。',
							// 	desc: '除夕一早，你在湖边遇到了新朋友，面前的少女脸色苍白，水珠顺着发丝一滴滴滑落。她静静地看着你几秒钟，忽然笑了出来。她向你伸出手——',
							// 	imgUrl: window.location.origin + icon_cy
							// });
							return (<Index roles='cuyu' />)
						}}
					/>
					<Route path='/egan' render={()=>{
							document.title = '私達の出会いも、一種の運命ですね。';
							// weChatShare({
							// 	title: '在新旧交替的此刻，我们相遇了。',
							// 	desc: '准备年夜饭的时候，忽然一道光撒在你的面前。少女缓缓转过头来，逆着光，你看不清她脸上的表情。只能看见她手上光华流转，走近一看，原来是朵花。你听见面前的人对你说——',
							// 	imgUrl: window.location.origin + icon_eg
							// });
							return (<Index roles='egan' />)
						}}
					/>
					<Route path='/futejia' render={()=>{
							document.title = '私の心を癒せるのは、酒だけだ。御侍、一杯どう？';
							// weChatShare({
							// 	title: '除夕？...你得陪我喝到尽兴才行。',
							// 	desc: '除夕前夜，渐渐热闹起的小镇酒馆，提早下工的乡民陆续进屋，你的对面忽然坐下了一个有趣的姑娘。',
							// 	imgUrl: window.location.origin + icon_ftj
							// });
							return (<Index roles='futejia' />)
						}}
					/>
					<Route path='/tilamisu' render={()=>{
							document.title = '私が側にいますから、寂しくありませんよ。';
							// weChatShare({
							// 	title: '您的新年愿望，是什么呢？',
							// 	desc: '虽说是除夕，但还得工作。一下班你就往家里赶，赶得急了，你有些喘不上气，终于到家了还没敲门，门就开了——',
							// 	imgUrl: window.location.origin + icon_tlms
							// });
							return (<Index roles='tilamisu' />)
						}}
					/>
				</div>
			</Router>
		)
	}
}
export default Routes;
