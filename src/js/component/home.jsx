import React from "react";
import Navbar from "../component/Navbar.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		
			<>
			<Navbar/>
			<div className="badCrew">
				<h2>Meet the Bad Friends</h2>
				<div
					className="card mb-3"
					style={{ color: "#000000", maxWidth: "640px" }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src="https://pbs.twimg.com/media/FNw_rEWVEAI742d.jpg"
								className="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body rounded">
								<h5 className="card-title">Rudy Jules</h5>
								<p className="card-text">
									The uninterested, knife wielding, animal
									rescuing, anime enthusiast of the BAD
									FRIENDS crew.
								</p>
								<p className="card-text">
									<small className="text-muted">
										Filipino Queen
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="card mb-3"
					style={{ color: "#000000", maxWidth: "640px" }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src="https://deadline.com/wp-content/uploads/2022/05/Ep108-Bobby-Lee-e1653415207547.jpeg?w=640"
								className="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body rounded">
								<h5 className="card-title">Bobby Lee</h5>
								<p className="card-text">
									Sexy, talented, luxury loving, comedian.
									With a multi-colored penis(Average size).
								</p>
								<p className="card-text">
									<small className="text-muted">
										Korean Panda
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="card mb-3"
					style={{ color: "#000000", maxWidth: "640px" }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src="https://s3.amazonaws.com/bit-photos/large/9027349.jpeg"
								className="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body rounded">
								<h5 className="card-title">Andrew Santino</h5>
								<p className="card-text">
									The best dramatic actor of our generation,
									that also does comedy sometimes. The 1st
									ginger not only with a soul, but too much of
									it. Easy to fuel his deep seeded anger, at risk of
									strangling Bobby at any moment.
								</p>
								<p className="card-text">
									<small className="text-muted">
										Cheeto Guido
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="card mb-3"
					style={{ color: "#000000", maxWidth: "640px" }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src="https://m.media-amazon.com/images/M/MV5BMTU0MzAzNTU5NF5BMl5BanBnXkFtZTgwMTg5NDI3OTE@._V1_.jpg"
								className="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body rounded">
								<h5 className="card-title">Doc Willis</h5>
								<p className="card-text">
									Possibly a serial killer that targets the
									gays. Tallest member of the Bad friends.
									Looking for his 1st girlfriend.
								</p>
								<p className="card-text">
									<small className="text-muted">
										Little Black Magic
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="card mb-3"
					style={{ color: "#000000", maxWidth: "640px" }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src="https://www.qu.edu/4a718d/contentassets/4e8900ecb35141baabc6f27149aada42/andres-rosende-novo-600x600.jpg"
								className="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body rounded">
								<h5 className="card-title">Andres Rosende</h5>
								<p className="card-text">
									The one true director/comedian.
									Anti-mexican, recently converted American
									Citizen.
								</p>
								<p className="card-text">
									<small className="text-muted">
										Fancy B
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="card mb-3"
					style={{ color: "#000000", maxWidth: "640px" }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img
								src="https://nyfilmschool.files.wordpress.com/2015/04/george-kimmel-pic.jpg"
								className="img-fluid rounded-start"
								alt="..."
							/>
						</div>
						<div className="col-md-8">
							<div className="card-body rounded">
								<h5 className="card-title">George Kimmel</h5>
								<p className="card-text">Who cares?</p>
								<p className="card-text">
									<small className="text-muted">
										Clout theif
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					background: "#fc6a03",
					maxWidth: "100%",
					maxheight: "25em",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center"
				}}
				className="youTube">
					<h2 style={{color: "#ffffff", marginTop: "5px"}}>Keep in Touch with the Gang</h2>
				<img
					style={{ marginTop: "15px",
						maxWidth: "600px" }}
					src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/adce8642-153c-46ae-886f-08a668835ea1/dexqy47-a9b9f2ba-0423-475a-9a63-caba25f7cf8e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FkY2U4NjQyLTE1M2MtNDZhZS04ODZmLTA4YTY2ODgzNWVhMVwvZGV4cXk0Ny1hOWI5ZjJiYS0wNDIzLTQ3NWEtOWE2My1jYWJhMjVmN2NmOGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gRwQ7jQ83Hr5l-S3paF8AhL_2VMiL-T-RBcWGTYlK6Q"
				/>
			

				<div className="subBtn">
					<a href="https://www.youtube.com/c/BadFriends/featured">
						<button className="button">Subscribe to Channel</button>
					</a>
				
				</div>

			</div>
				<div className="appleMusicLink">
				
					<div class="container">
					<h2 style={{color: "#ffffff", opacity:"100%", marginTop: "5px"}}>Daddy Why You Die?</h2>
						<img src="https://yt3.ggpht.com/ytc/AKedOLQMIn2am39xfqbJIrg1VQk6--0JgDXIvRj0zlRd=s900-c-k-c0x00ffffff-no-rj"  style={{width:"100%"}}/>
							<a href="https://music.apple.com/ma/album/daddy-why-you-die-single/1588418231">
								<button class="btn">Listen Here</button>
							</a>
					</div>
				</div>
			</>
		
	);
};


export default Home;



