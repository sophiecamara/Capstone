package com.example.demo.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

	@Entity
	@Table
	public class AndroidModel {
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private int id;
		private String brandname;
	    private String serviceprovider;
	    private String apps;
	    private char servicetype;
	    private double cost;
        private String image;
	    public  AndroidModel(){
	    	
	    }
	    
	    public AndroidModel(int id, String name, String serviceprovider,String apps,char servicetype,double cost,String image) {
			super();
			this.id = id;
			this.brandname = name;
			this.serviceprovider = serviceprovider;
			this.apps = apps;
			this.servicetype= servicetype;
			this.cost= cost;
			this.image=image;
		}
	   
		public String getImage() {
			return image;
		}

		public void setImage(String image) {
			this.image = image;
		}

		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getBrandname() {
			return brandname;
		}

		public void setBrandname(String brandname) {
			this.brandname = brandname;
		}

		public String getServiceprovider() {
			return serviceprovider;
		}

		public void setServiceprovider(String serviceprovider) {
			this.serviceprovider = serviceprovider;
		}

		public String getApps() {
			return apps;
		}

		public void setApps(String apps) {
			this.apps = apps;
		}

		 public char getServicetype() {
				return servicetype;
		}

		public void setServicetype(char servicetype) {
				this.servicetype = servicetype;
		}


		public double getCost() {
			return cost;
		}

		public void setCost(double cost) {
			this.cost = cost;
		}

		

		
		
}
