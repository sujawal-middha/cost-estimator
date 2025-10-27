package com.cost.estimator.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cost.estimator.dao.CategoryDao;
import com.cost.estimator.entity.Category;

@Service
public class CategoryServiceImplementation implements CategoryService{
	
	@Autowired
	CategoryDao categoryDao;

	@Override
	public List<Category> getCategories() {
		return categoryDao.findAll();
	}

}
