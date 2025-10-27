package com.cost.estimator.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cost.estimator.entity.Feature;

public interface FeatureDao extends JpaRepository<Feature, Integer>{

}
