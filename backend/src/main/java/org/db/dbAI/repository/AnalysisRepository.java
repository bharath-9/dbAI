package org.db.dbAI.repository;

import org.db.dbAI.entities.AnalysisDto;
import org.springframework.stereotype.Repository;



@Repository
public interface AnalysisRepository extends CrudRepository<AnalysisDto,Long> {

    @Query(value = "",nativeQuery=true)
    List<AnalysisDto> getDtos();
}
