package com.cost.estimator.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "feature_categories")
public class Category {
	
	@GeneratedValue
	@Id
	@Column(name = "category_id")
	private Integer id;
	@Column(name = "category_name")
	private String name;
	
	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonManagedReference
    private List<Feature> features;
	
	public Category() {
		super();
	}

	

	public Category(Integer id, String name, List<Feature> features) {
		super();
		this.id = id;
		this.name = name;
		this.features = features;
	}

	public List<Feature> getFeatures() {
		return features;
	}



	public void setFeatures(List<Feature> features) {
		this.features = features;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}



	@Override
	public String toString() {
		return "Category [id=" + id + ", name=" + name + ", features=" + features + "]";
	}


}
