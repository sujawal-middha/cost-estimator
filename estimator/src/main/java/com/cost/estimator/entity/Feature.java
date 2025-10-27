package com.cost.estimator.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "features")
public class Feature {

	@Id
	@GeneratedValue
	@Column(name = "feature_id")
	private Integer id;
	@ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
	@JsonBackReference
	private Category category;
	@Column(name = "feature_name")
	private String name;
	private Double Cost;
	public Feature() {
		super();
	}
	public Feature(Integer id, Category category, String name, Double cost) {
		super();
		this.id = id;
		this.category = category;
		this.name = name;
		Cost = cost;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getCost() {
		return Cost;
	}
	public void setCost(Double cost) {
		Cost = cost;
	}
	@Override
	public String toString() {
		return "Feature [id=" + id + ", category=" + category + ", name=" + name + ", Cost=" + Cost + "]";
	}
}
