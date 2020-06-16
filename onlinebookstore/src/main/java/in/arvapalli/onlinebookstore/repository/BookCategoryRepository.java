package in.arvapalli.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.arvapalli.onlinebookstore.entity.BookCategory;

public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
